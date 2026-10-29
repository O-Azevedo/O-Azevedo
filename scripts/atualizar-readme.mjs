// Atualiza os trechos automáticos do README do perfil.
//
// Cada trecho fica entre <!-- auto:nome --> e <!-- /auto:nome -->; o resto do
// README é texto escrito à mão e nunca é tocado.
//
// De onde vêm os dados:
// - Com o secret PROFILE_TOKEN (token de leitura dos repositórios privados):
//   a release mais recente de cada projeto, os commits dos últimos 30 dias e os
//   números do HackQuiz, contados executando os próprios arquivos de dados do app.
// - Sem o token: só o que é público, a versão que cada site publica. O que não
//   der para descobrir fica com o valor que já está no README.
//
// Uso: node scripts/atualizar-readme.mjs   (escreve README.md só se algo mudou)

import fs from 'node:fs';
import vm from 'node:vm';

const DONO = 'O-Azevedo';
const README = new URL('../README.md', import.meta.url);
const TOKEN = process.env.PROFILE_TOKEN || '';

const PROJETOS = [
  {
    id: 'hackquiz', nome: 'HackQuiz', repo: 'hackquiz', site: 'https://hackquiz-blackbox.vercel.app',
    // A landing mostra "Versão X.Y.Z" no rodapé.
    versaoPublica: async () => (await texto('https://hackquiz-blackbox.vercel.app/')).match(/Versão (\d+\.\d+\.\d+)/)?.[1],
  },
  {
    id: 'rpg', nome: 'RPG Espiritual', repo: 'RPG_espiritual', site: 'https://rpg-espiritual.vercel.app',
    versaoPublica: async () => JSON.parse(await texto('https://rpg-espiritual.vercel.app/version.json')).version,
  },
  {
    id: 'sombraluz', nome: 'Sombraluz', repo: 'sombraluz', site: 'https://sombraluz.vercel.app',
    versaoPublica: async () => JSON.parse(await texto('https://sombraluz.vercel.app/version.json')).version,
  },
];

async function texto(url, headers = {}) {
  const r = await fetch(url, { headers: { 'User-Agent': 'perfil-readme', ...headers } });
  if (!r.ok) throw new Error(`${r.status} em ${url}`);
  return r.text();
}

async function api(caminho, aceita = 'application/vnd.github+json') {
  const r = await fetch(`https://api.github.com${caminho}`, {
    headers: { Authorization: `Bearer ${TOKEN}`, Accept: aceita, 'User-Agent': 'perfil-readme', 'X-GitHub-Api-Version': '2022-11-28' },
  });
  if (!r.ok) throw new Error(`${r.status} em ${caminho}`);
  return { corpo: aceita.includes('raw') ? await r.text() : await r.json(), link: r.headers.get('link') || '' };
}

async function commitsDesde(repo, desde) {
  let total = 0;
  for (let pagina = 1; pagina <= 10; pagina++) {
    const { corpo, link } = await api(`/repos/${DONO}/${repo}/commits?since=${desde}&per_page=100&page=${pagina}`);
    total += corpo.length;
    if (!link.includes('rel="next"')) break;
  }
  return total;
}

// Os números do HackQuiz vêm de executar os arquivos de dados, na mesma ordem
// do app (é o que o .claude/dados.js do próprio projeto faz). Regex daria um
// número "parecido", e o perfil estaria afirmando algo que o app não tem.
async function numerosHackquiz() {
  const fontes = ['questions-data.js', 'taxonomy.js', 'question-explanations.js', 'glossary.js', 'stories.js', 'practice.js'];
  const codigo = [];
  for (const f of fontes) codigo.push((await api(`/repos/${DONO}/hackquiz/contents/app/${f}`, 'application/vnd.github.raw+json')).corpo);
  const ctx = vm.createContext({ window: {}, console: { log() {}, warn() {}, error() {} }, out: {} });
  vm.runInContext(`${codigo.join('\n;\n')}\n;\nout.q = QUESTIONS; out.d = PRACTICE_DRILLS; out.t = GLOSSARY_TERMS;`, ctx, { timeout: 5000 });
  const { q, d, t } = ctx.out;
  return {
    perguntas: q.length,
    materias: new Set(q.map(x => x.category)).size,
    exercicios: d.length,
    termos: t.length,
  };
}

const dataBR = iso => new Date(iso).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });

function lerTrecho(md, nome) {
  return md.match(new RegExp(`<!-- auto:${nome} -->([\\s\\S]*?)<!-- /auto:${nome} -->`))?.[1];
}

function trocarTrecho(md, nome, valor) {
  if (valor === undefined || valor === null) return md;
  const re = new RegExp(`(<!-- auto:${nome} -->)[\\s\\S]*?(<!-- /auto:${nome} -->)`, 'g');
  return md.replace(re, (_, a, b) => `${a}${valor}${b}`);
}

async function tentar(rotulo, fn) {
  try { return await fn(); } catch (e) { console.warn(`aviso: ${rotulo}: ${e.message}`); return undefined; }
}

async function main() {
  const original = fs.readFileSync(README, 'utf8');
  let md = original;
  const desde = new Date(Date.now() - 30 * 864e5).toISOString();
  if (!TOKEN) console.warn('aviso: sem PROFILE_TOKEN, só a versão publicada nos sites será atualizada');

  // A tabela inteira é um trecho só: um comentário HTML no começo de uma linha
  // de tabela quebraria a tabela.
  const antigaTabela = lerTrecho(original, 'status') || '';
  const linhas = ['', '', '| Projeto | Versão | Lançada em | Commits (30 dias) | Site |', '|---|---|---|---|---|'];
  for (const p of PROJETOS) {
    let versao, data, commits;
    if (TOKEN) {
      const rel = await tentar(`${p.repo}: release`, async () => (await api(`/repos/${DONO}/${p.repo}/releases/latest`)).corpo);
      if (rel) { versao = rel.tag_name.replace(/^v/, ''); data = dataBR(rel.published_at); }
      commits = await tentar(`${p.repo}: commits`, () => commitsDesde(p.repo, desde));
    }
    versao ??= await tentar(`${p.id}: versão no site`, p.versaoPublica);

    md = trocarTrecho(md, `${p.id}-versao`, versao && `v${versao}`);
    // O que não foi descoberto agora mantém o valor anterior da tabela.
    const antiga = (antigaTabela.split('\n').find(l => l.includes(`[${p.nome}]`)) || '').split('|').map(s => s.trim());
    const site = `[![site](https://img.shields.io/website?url=${encodeURIComponent(p.site)}&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](${p.site})`;
    linhas.push(`| **[${p.nome}](${p.site})** | ${versao ? `v${versao}` : antiga[2] || '—'} | ${data || antiga[3] || '—'} | ${commits ?? (antiga[4] || '—')} | ${site} |`);
  }
  md = trocarTrecho(md, 'status', linhas.join('\n') + '\n\n');

  if (TOKEN) {
    const n = await tentar('hackquiz: números', numerosHackquiz);
    if (n) for (const [k, v] of Object.entries(n)) md = trocarTrecho(md, `hackquiz-${k}`, v);
  }

  // A data só muda quando outra coisa mudou: sem isso haveria um commit por dia
  // só para dizer "conferido hoje".
  if (md === original) { console.log('README já estava em dia.'); return; }
  md = trocarTrecho(md, 'atualizado', dataBR(Date.now()));
  fs.writeFileSync(README, md);
  console.log('README atualizado.');
}

main().catch(e => { console.error(e); process.exit(1); });
