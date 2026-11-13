<h1 align="center">O Azevedo</h1>

<p align="center">
  <strong>Segurança de aplicações · Qualidade de software · Desenvolvimento web e jogos</strong><br>
  <sub>Da ideia à publicação: projetos funcionais, testados, versionados e construídos com atenção à segurança.</sub>
</p>

<p align="center">
  <a href="#perfil">Perfil</a> ·
  <a href="#serviços-no-ar">Serviços</a> ·
  <a href="#projetos-em-destaque">Projetos</a> ·
  <a href="#situação-dos-projetos">Situação</a> ·
  <a href="#competências">Competências</a> ·
  <a href="#como-trabalho">Como trabalho</a> ·
  <a href="#contato">Contato</a>
</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=fff">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=fff">
  <img alt="Neon" src="https://img.shields.io/badge/Neon-00E599?style=flat-square&logoColor=000">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=fff">
  <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=fff">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=fff">
  <img alt="Mercado Pago" src="https://img.shields.io/badge/Mercado_Pago-00B1EA?style=flat-square&logo=mercadopago&logoColor=fff">
  <img alt="Godot" src="https://img.shields.io/badge/Godot_4-478CBF?style=flat-square&logo=godotengine&logoColor=fff">
  <img alt="Unity" src="https://img.shields.io/badge/Unity_6-000?style=flat-square&logo=unity&logoColor=fff">
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=fff">
  <img alt="Luau" src="https://img.shields.io/badge/Luau_(Roblox)-00A2FF?style=flat-square&logo=roblox&logoColor=fff">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=000">
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=fff">
  <img alt="TryHackMe" src="https://img.shields.io/badge/TryHackMe-212C42?style=flat-square&logo=tryhackme&logoColor=88CC14">
  <img alt="CTF" src="https://img.shields.io/badge/CTF-player-C0392B?style=flat-square">
</p>

---

## Perfil

Sou estudante de **cibersegurança**, desenvolvedor e entusiasta de qualidade de software. Trabalho na interseção entre **segurança, engenharia e experiência de uso**: entender o problema, construir a solução, integrar serviços, testar os casos esperados e os inesperados e deixar o projeto pronto para ser publicado e mantido.

Tenho **serviços em produção** (venda com pagamento, entrega e acesso controlado), além de ferramentas educacionais e jogos para navegador. Integro aplicações com **APIs e serviços externos** (Mercado Livre e Mercado Pago, com confirmação de pagamento validada no servidor) e uso **Cloudflare**, **Vercel** e **Neon (PostgreSQL)** para publicar e guardar dados.

Estudo segurança ofensiva e defensiva, participo de CTFs e treino no TryHackMe. Pratico apenas em sistemas próprios ou ambientes autorizados, com escopo definido e divulgação responsável.

## Serviços no ar

Produtos publicados e em operação, com pagamento, controle de acesso e dados pessoais tratados no servidor.

### 🔮 [Caminhos Abertos 2027](https://caminhos.abertos2027.workers.dev) — loja de análise personalizada

<sub><!-- auto:caminhos-versao -->v1.0.0<!-- /auto:caminhos-versao --> · Next.js 16 · TypeScript · Cloudflare Workers · Neon (PostgreSQL) · Mercado Pago</sub>

Página de vendas de uma análise personalizada para 2027 (numerologia, Baralho Cigano e Tarot), entregue em áudios e PDF. O fluxo vai da venda à entrega sem planilha nem conferência manual de comprovante.

- **Formulário de personalização obrigatório** antes do pagamento, validado com Zod no navegador e de novo no servidor.
- **Pix e cartão dentro do site** pelo Checkout Transparente do Mercado Pago (API de Orders), sem o cliente precisar de conta.
- **O pedido só vira "pago" quando o servidor consulta o Mercado Pago** e confere status, valor, moeda e referência. Voltar para a página de sucesso ou mandar `status=approved` na URL não libera nada.
- Webhook com assinatura verificada e tolerante a duplicidade e a chegada fora de ordem; um cron reconcilia pagamentos cujo aviso se perdeu.
- Fila de entregas com envio em um clique por WhatsApp ou e-mail, área administrativa com sessão assinada, rate limit, proteção CSRF e limpeza dos dados de pedidos não pagos (LGPD).
- Testes de cada cenário de pagamento (aprovado, pendente, recusado, estorno, valor divergente, Mercado Pago fora do ar) com Vitest e PGlite, e CI com testes, tipos e build para Workers.

### 🪞 [Minha Retrospectiva 2026](https://minha-retrospectiva-2026.pages.dev) — experiência pessoal com acesso controlado

<sub><!-- auto:retrospectiva-versao -->v0.5.1<!-- /auto:retrospectiva-versao --> · JavaScript · Cloudflare Pages · Functions · D1</sub>

Quiz de 15 perguntas, com vereditos escritos à mão, que devolve uma leitura individual, montada por regras que cruzam as respostas, sem IA. Vendido como produto digital, com cada compra recebendo um código próprio.

- **Acesso só por código individual**: no primeiro uso ele fica ligado ao e-mail e é recusado em qualquer outro.
- **Uma resposta por código, contada no servidor**: limpar o navegador ou trocar de aparelho não libera outra.
- Sem uso simultâneo: entrar em outro aparelho encerra a sessão anterior.
- Link de compartilhamento que mostra só o resultado, sem nome, e-mail ou respostas.
- Liberação de nova resposta pelo suporte com um workflow do GitHub Actions; deploy automático depois dos testes; dados guardados por prazo definido.

## Projetos em destaque

### 🛡️ [HackQuiz](https://hackquiz-blackbox.vercel.app) — aprendizagem em cibersegurança

<sub><!-- auto:hackquiz-versao -->v1.5.3<!-- /auto:hackquiz-versao --> · HTML/CSS/JS · Firebase · Vercel</sub>

Plataforma em português para estudar segurança da informação por competências: **<!-- auto:hackquiz-perguntas -->173<!-- /auto:hackquiz-perguntas --> perguntas em <!-- auto:hackquiz-materias -->9<!-- /auto:hackquiz-materias --> matérias**, **<!-- auto:hackquiz-exercicios -->30<!-- /auto:hackquiz-exercicios --> exercícios práticos** e um glossário de <!-- auto:hackquiz-termos -->57<!-- /auto:hackquiz-termos --> termos, com explicações referenciadas e repetição espaçada.

- Red Team e Blue Team, redes, criptografia, Linux e Windows, forense, GRC e Direito Digital.
- Exercícios baseados em artefatos e cenários práticos, não apenas memorização.
- Regras do Firestore testadas no emulador, cobrindo acessos legítimos e tentativas não autorizadas.
- Correções de segurança reais no próprio app, como XSS armazenado e injeção causada pelo tratamento de caracteres Unicode.
- CSP sem `unsafe-inline`, cabeçalhos de segurança, auditoria de acessibilidade e CI.

<p align="center"><img src="img/hackquiz.png" alt="Tela do HackQuiz" width="640"></p>

### ⚔️ [Runas & Hordas](https://runas-e-hordas.pages.dev) — survivor-like para navegador

<sub><!-- auto:runas-versao -->v0.24.0<!-- /auto:runas-versao --> · HTML5 Canvas · JavaScript puro · Cloudflare Pages</sub>

Ação de fantasia medieval com visual cartoon em vetor, para celular e PC direto no navegador. O herói só se move; as armas atacam sozinhas.

- **12 armas**, uma em cada mão, escolhidas e melhoradas no Arsenal ao longo da partida.
- Runas ativáveis, chefes por capítulo, santuários com bênçãos, maldições, pactos e eventos.
- Progressão entre partidas (atributos, equipamentos com raridade, missões e loja) e save na nuvem com conta Google.
- **96 testes** da lógica pura e uma simulação com bot em relógio acelerado.

### 🌅 [Ilumbá](https://ilumba.vercel.app) — RPG 2D de vida e pós-vida

<sub><!-- auto:rpg-versao -->v0.87.0<!-- /auto:rpg-versao --> · Godot 4 · GDScript · exportação web</sub>

Simulação de vida em pixel art em que escolhas sobre estudo, trabalho, família e espiritualidade moldam a jornada, que continua depois da morte.

- Eventos, empregos, diálogos e missões em JSON, separados da lógica do jogo.
- Testes automatizados de regras e de compatibilidade com saves antigos.
- Simulações de vidas inteiras executadas no CI.

<p align="center"><img src="img/rpg-cidade.png" alt="Cidade do Ilumbá" width="640"></p>

### Outros projetos

| Projeto | Descrição | Tecnologias |
|---|---|---|
| [Sombraluz](https://sombraluz.pages.dev) | Survivor-like com progressão, equipamentos, missões e ranking online | HTML5 Canvas · JavaScript · Firebase · PWA |
| Tharveth *(em desenvolvimento)* | RPG de fantasia sombria para Roblox, com testes de lógica e simulação de combate com latência | Luau · Rojo · Lune · Roblox Studio |
| Firewall FPS *(em desenvolvimento)* | FPS cooperativo de sobrevivência contra hordas | Unity 6 · C# · FishNet |
| [FinApp](https://finapp-six-topaz.vercel.app) *(MVP no ar)* | Educação e organização financeira em português e inglês, no ar como "Grana no Controle" (nome provisório) | Next.js · TypeScript · Prisma · PostgreSQL |

## Situação dos projetos

<!-- auto:status -->

| Projeto | Versão | Lançada em | Commits (30 dias) | Site |
|---|---|---|---|---|
| **[HackQuiz](https://hackquiz-blackbox.vercel.app)** | v1.5.3 | 29/10/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fhackquiz-blackbox.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://hackquiz-blackbox.vercel.app) |
| **[Ilumbá](https://ilumba.vercel.app)** | v0.87.0 | 06/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Filumba.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://ilumba.vercel.app) |
| **[Sombraluz](https://sombraluz.pages.dev)** | v0.45.0 | 31/10/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fsombraluz.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://sombraluz.pages.dev) |
| **[Runas & Hordas](https://runas-e-hordas.pages.dev)** | v0.24.0 | 07/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Frunas-e-hordas.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://runas-e-hordas.pages.dev) |
| **[Caminhos Abertos 2027](https://caminhos.abertos2027.workers.dev)** | v1.0.0 | 13/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fcaminhos.abertos2027.workers.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://caminhos.abertos2027.workers.dev) |
| **[Minha Retrospectiva 2026](https://minha-retrospectiva-2026.pages.dev)** | v0.5.1 | 13/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fminha-retrospectiva-2026.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://minha-retrospectiva-2026.pages.dev) |

<!-- /auto:status -->

<sub>Tabela, versões e números do HackQuiz atualizados por uma GitHub Action deste repositório. Última mudança: <!-- auto:atualizado -->11/11/2026<!-- /auto:atualizado -->.</sub>

## Competências

| Área | Competências e prática |
|---|---|
| **Segurança de aplicações** | OWASP Top 10, XSS e injeção, validação de entrada, controle de acesso, regras do Firestore, CSP, HSTS, proteção contra clickjacking, cookies e cabeçalhos HTTP |
| **Testes e QA** | Testes unitários e de integração, regressão, testes de regras de segurança, compatibilidade de saves, simulação automatizada, validação de conteúdo e CI |
| **Acessibilidade** | Contraste WCAG AA, navegação por teclado e padrões de acessibilidade |
| **Desenvolvimento web** | JavaScript, TypeScript, HTML/CSS, Next.js, aplicações responsivas, PWA e experiências para navegador |
| **Integração de APIs** | Mercado Livre e Mercado Pago (checkout, webhooks e conferência do pagamento no servidor), validação com Zod e tratamento de respostas de serviços externos |
| **Dados e backend** | Neon/PostgreSQL, Prisma, Drizzle, Cloudflare D1, Firebase/Firestore; regras de acesso e validação no servidor |
| **Cloud e publicação** | Cloudflare Workers e Pages, Vercel, configuração de domínios e serviços web |
| **Desenvolvimento de jogos** | Godot 4/GDScript, Unity/C#, HTML5 Canvas, Luau/Roblox; combate, progressão, conteúdo e simulação |
| **Entrega e automação** | Git, GitHub Actions, CI, versionamento semântico, changelog, releases e deploy |
| **Fundamentos de segurança** | Redes, criptografia, Linux, Windows, forense, GRC, LGPD, CTFs e prática em laboratório |

## Como trabalho

- **Engenharia com critério:** decisões técnicas documentadas, para que mudanças futuras respeitem o contexto do projeto.
- **Qualidade verificável:** testes, simulações e CI para pegar regressões e validar regras, não só o caminho feliz.
- **Segurança desde o desenho:** abuso, autorização e validação fazem parte da funcionalidade, não de uma revisão no fim.
- **Integrações confiáveis:** o servidor confere o que vem de fora; clique, redirecionamento ou comprovante não liberam nada sozinhos.
- **Entrega versionada:** cada mudança integrada vira versão, changelog e release com os arquivos nomeados pela versão.
- **IA como ferramenta:** uso assistência de IA para acelerar o trabalho, mantendo comigo as decisões, a revisão e a responsabilidade pelo resultado.

## Contato

Aberto a conversar sobre **segurança de aplicações, QA, integração de APIs, desenvolvimento web e jogos**, além de oportunidades e projetos técnicos.

[Abra uma issue neste repositório](https://github.com/O-Azevedo/O-Azevedo/issues/new) para entrar em contato.

<p align="center"><sub>Construir com intenção. Testar com rigor. Integrar com cuidado. Publicar com responsabilidade.</sub></p>
