<h1 align="center">Saudações, eu sou O Azevedo</h1>

<p align="center">
  <b>Cibersegurança e desenvolvimento web</b> · jogos · engenharia assistida por IA<br>
  <sub>Security-minded web & game developer shipping tested, versioned projects with AI-assisted engineering.</sub>
</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=fff">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=fff">
  <img alt="Godot" src="https://img.shields.io/badge/Godot_4-478CBF?style=flat-square&logo=godotengine&logoColor=fff">
  <img alt="Unity" src="https://img.shields.io/badge/Unity_6-000?style=flat-square&logo=unity&logoColor=fff">
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=fff">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=fff">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=fff">
</p>

<p align="center">
  <a href="#️-hackquiz">HackQuiz</a> ·
  <a href="#-ilumbá">Ilumbá</a> ·
  <a href="#️-sombraluz">Sombraluz</a> ·
  <a href="#-outros-projetos">Outros projetos</a> ·
  <a href="#-como-eu-trabalho-engenharia-assistida-por-ia">Como eu trabalho</a>
</p>

---

Construo projetos **do começo ao fim**: código, testes, segurança, publicação
e versão. Tudo o que está abaixo roda de verdade, com link para abrir agora.

## 📡 Em desenvolvimento agora
<!-- auto:status -->

| Projeto | Versão | Lançada em | Commits (30 dias) | Site |
|---|---|---|---|---|
| **[HackQuiz](https://hackquiz-blackbox.vercel.app)** | v1.5.3 | 23/10/2026 | 124 | [![site](https://img.shields.io/website?url=https%3A%2F%2Fhackquiz-blackbox.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://hackquiz-blackbox.vercel.app) |
| **[Ilumbá](https://rpg-espiritual.vercel.app)** | v0.75.0 | (Beta) | 139 | [![site](https://img.shields.io/website?url=https%3A%2F%2Frpg-espiritual.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://rpg-espiritual.vercel.app) |
| **[Sombraluz](https://sombraluz.vercel.app)** | v0.41.0 | (Beta) | 122 | [![site](https://img.shields.io/website?url=https%3A%2F%2Fsombraluz.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://sombraluz.vercel.app) |

<!-- /auto:status -->
<sub>Esta tabela e os números dos projetos se atualizam sozinhos todo dia, por um
GitHub Action deste repositório. Última mudança: <!-- auto:atualizado -->31/10/2026<!-- /auto:atualizado -->.</sub>

> 🔒 Os repositórios são privados. Os projetos estão publicados nos links
> acima, e o código pode ser mostrado sob solicitação, numa entrevista ou
> avaliação técnica.

## 🛡️ HackQuiz

**[▶ Abrir o app](https://hackquiz-blackbox.vercel.app)** · <!-- auto:hackquiz-versao -->v1.5.3<!-- /auto:hackquiz-versao --> · HTML/CSS/JS puro · Firebase · Vercel

Plataforma de estudo de segurança da informação em português:
**<!-- auto:hackquiz-perguntas -->173<!-- /auto:hackquiz-perguntas --> perguntas em <!-- auto:hackquiz-materias -->9<!-- /auto:hackquiz-materias --> matérias**,
cada uma com uma explicação pesquisada e fontes oficiais citadas,
**<!-- auto:hackquiz-exercicios -->30<!-- /auto:hackquiz-exercicios --> exercícios práticos** e um vocabulário de
<!-- auto:hackquiz-termos -->57<!-- /auto:hackquiz-termos --> termos. A proficiência é medida por competência, e a
repetição espaçada traz de volta o que você errou.

| Área | Exemplos |
|---|---|
| Red Team e Blue Team | cadeia de ataque, engenharia social, detecção, resposta a incidentes |
| Redes | sub-rede, ARP, MITM, DoS, Wi-Fi (WPA2, Evil Twin) |
| Criptografia | hash, assinatura digital, certificados TLS, ponta a ponta |
| Forense, GRC e Direito Digital | cadeia de custódia, ISO 31000, matriz de risco, LGPD e escopo de pentest |
| Linux e Windows | `/etc/passwd`, SUID, crontab, `ps`, `ss`, tarefas agendadas |

<a href="https://hackquiz-blackbox.vercel.app"><img src="img/hackquiz.png" alt="Tela inicial do HackQuiz: os quatro níveis de conhecimento, de Inicial a Especialista, e o painel de progresso" width="100%"></a>

**Exercícios sobre artefatos reais, não decoreba:** ler a saída do `nmap`, achar
o IOC num log com `grep`, auditar os `Set-Cookie` de um login, achar a conta com
UID 0 que não se chama `root`. Os números mudam a cada tentativa, e cada etapa é
verificada.

<details>
<summary><b>Ver o vocabulário</b> (verbete Phishing)</summary>
<br>
<a href="https://hackquiz-blackbox.vercel.app"><img src="img/hackquiz-termo.png" alt="Verbete Phishing aberto: explicação em linguagem comum, o que é, na prática, onde as pessoas se confundem e as fontes da CISA e da FTC" width="100%"></a>
</details>

**A segurança do próprio app**

- **Sem backend:** as regras do Firestore são a única barreira, e uma suíte de **133 ataques no emulador** prova os dois lados, com todo ataque negado e todo uso legítimo aceito.
- Achei e corrigi falhas reais: um **XSS armazenado** e uma **injeção de código por U+2028** num gerador de trechos (o caractere invisível fazia texto da comunidade virar código).
- **CSP sem `unsafe-inline`**, cabeçalhos anti-clickjacking e HSTS.

**Engenharia:** 10 suítes de teste num runner próprio, auditoria de **contraste
WCAG AA** e de acessibilidade por teclado, CI em todo pull request, e um auditor
que reprova a documentação quando ela diverge do código.

---

## 🌀 Ilumbá

**[▶ Jogar no navegador](https://rpg-espiritual.vercel.app)** · <!-- auto:rpg-versao -->v0.75.0<!-- /auto:rpg-versao --> · Godot 4 · GDScript · exportação web

RPG 2D em pixel art no estilo BitLife (antes chamado RPG Espiritual): você vive meio ano por vez, estuda,
trabalha, forma família e escolhe um caminho espiritual. Depois da morte, o jogo
continua no plano espiritual, um lugar de trabalho e aprendizado, até reencarnar.

- **Duas fases jogáveis:** a vida inteira e o pós-vida, com Abrigo, Umbral, Colônia e falanges.
- **Conteúdo em dados:** eventos, empregos, falas, missões e ervas em JSON, separados do código.
- **Testado sem abrir o jogo:** o CI simula 300 vidas a cada pull request e roda mais 13 suítes de regras, incluindo a compatibilidade com saves antigos.
- **Cuidado com o jogador:** o pós-vida nunca é recompensa por morrer, e o contato do CVV (188) fica sempre no menu.
- Exportado do Godot para a web: roda no navegador, sem instalar nada, com releases versionadas.

<a href="https://rpg-espiritual.vercel.app"><img src="img/rpg-cidade.png" alt="Ilumbá: o personagem na cidade em pixel art, com a ficha de atributos, o diário de acontecimentos e as abas de ação" width="100%"></a>

<details>
<summary><b>Ver o mapa da cidade</b></summary>
<br>
<a href="https://rpg-espiritual.vercel.app"><img src="img/rpg-mapa.png" alt="Mapa completo da cidade do Ilumbá, com casas, templos, cemitério, praça e praia" width="100%"></a>
</details>

---

## ⚔️ Sombraluz

**[▶ Jogar no navegador](https://sombraluz.vercel.app)** · <!-- auto:sombraluz-versao -->v0.41.0<!-- /auto:sombraluz-versao --> · HTML5 Canvas · JavaScript puro · Firebase · PWA

Survivor-like para celular e navegador: você só move o personagem, as armas
atiram sozinhas, e a cada nível escolhe uma carta. Entre as partidas há uma
cidade com ferraria, mercado e guildas, classes, equipamentos com raridade e
nível, missões e ranking online.

<p align="center">
  <a href="https://sombraluz.vercel.app"><img src="img/sombraluz-menu.png" alt="Sombraluz: menu com o personagem Peregrino, rank, moedas e as abas de jogo" width="38%"></a>
  &nbsp;&nbsp;
  <a href="https://sombraluz.vercel.app"><img src="img/sombraluz-jogo.png" alt="Sombraluz: partida aos 1:32, nível 4, 146 abates, o personagem cercado de cristais e inimigos" width="38%"></a>
</p>

- Sem engine nem framework: Canvas e JavaScript puro, e um **PWA** que se instala pelo navegador e roda offline.
- Lógica coberta por mais de 130 testes e por uma **simulação com bot** que joga em velocidade acelerada para testar o balanceamento.
- **Ranking online protegido pelas regras do Firestore:** cada jogador só escreve a própria pontuação, só para cima e dentro de limites plausíveis.
- Cada tag gera o build web versionado pelo GitHub Actions, e o site na Vercel é o único canal do jogo.

---

## 🔧 Outros projetos

| Projeto | O que é | Stack |
|---|---|---|
| **[Runas & Hordas](https://runas-e-hordas.vercel.app)** | Survivor-like de fantasia medieval em pixel art, com 12 armas | HTML5 Canvas · JavaScript · Capacitor |
| **Firewall FPS** *(em desenvolvimento)* | FPS cooperativo de sobrevivência contra hordas | Unity 6 · C# · FishNet (multiplayer) |
| **APP Financeiro** *(em desenvolvimento)* | Plataforma de educação e organização financeira, em PT e EN | Next.js 16 · TypeScript · Prisma · PostgreSQL |

## 🤖 Como eu trabalho: engenharia assistida por IA

Uso IA (**Claude Code**) como parte do processo, não como atalho. O que faz
isso funcionar é a parte que continua sendo minha: decidir, verificar e manter.

- **Cada projeto tem um guia de decisões** com o *porquê* de cada escolha, para nenhuma mudança desfazer uma decisão sem saber.
- **Nada entra sem verificação:** testes automatizados, auditorias de contraste e acessibilidade, testes de ataque às regras de segurança e CI em todo pull request.
- **Agentes com papéis separados** no HackQuiz: pesquisa de currículo, autoria, revisão que reabre as fontes e auditoria. Quem escreve não aprova o próprio trabalho.
- **Fluxo de produção:** branch, pull request, CI verde, versão semântica e release com os arquivos de cada versão.
- **Até este perfil é automatizado:** a tabela do topo e os números do HackQuiz são lidos dos projetos todo dia, em vez de envelhecerem à mão.

## 📫 Contato

Quer ver o código de algum projeto ou conversar sobre uma vaga?
[Abra uma issue neste repositório](https://github.com/O-Azevedo/O-Azevedo/issues/new) que eu respondo.
