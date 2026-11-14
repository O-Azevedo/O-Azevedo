<h1 align="center">O Azevedo</h1>

<p align="center">
  <strong>Produtos digitais · Segurança de aplicações · Qualidade de software</strong><br>
  <sub>Da página de vendas ao pagamento confirmado no servidor: produtos no ar, testados, versionados e construídos com atenção à segurança.</sub>
</p>

<p align="center">
  <a href="#-projeto-principal-cocrie-seu-ano">Projeto principal</a> ·
  <a href="#outros-produtos-no-ar">Produtos no ar</a> ·
  <a href="#em-desenvolvimento">Em desenvolvimento</a> ·
  <a href="#jogos">Jogos</a> ·
  <a href="#situação-dos-projetos">Situação</a> ·
  <a href="#competências">Competências</a> ·
  <a href="#contato">Contato</a>
</p>

<p align="center">
  <img alt="Cloudflare" src="https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=cloudflare&logoColor=fff">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=fff">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=fff">
  <img alt="Neon" src="https://img.shields.io/badge/Neon-00E599?style=flat-square&logoColor=000">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=fff">
  <img alt="Mercado Pago" src="https://img.shields.io/badge/Mercado_Pago-00B1EA?style=flat-square&logo=mercadopago&logoColor=fff">
  <img alt="GitHub Actions" src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=fff">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=000">
  <img alt="TryHackMe" src="https://img.shields.io/badge/TryHackMe-212C42?style=flat-square&logo=tryhackme&logoColor=88CC14">
  <img alt="CTF" src="https://img.shields.io/badge/CTF-player-C0392B?style=flat-square">
  <img alt="Godot" src="https://img.shields.io/badge/Godot_4-478CBF?style=flat-square&logo=godotengine&logoColor=fff">
</p>

---

## Perfil

Sou estudante de **cibersegurança** e desenvolvedor. Construo **produtos digitais que vendem e entregam sozinhos**: página de vendas, pagamento, acesso controlado e entrega, com a regra de negócio garantida no servidor e não na tela.

Trabalho na interseção entre **segurança, engenharia e experiência de uso**: entender o problema, construir a solução, integrar serviços (Kiwify, Mercado Pago, Mercado Livre), testar os casos esperados e os inesperados e publicar na **Cloudflare** (Workers, Pages, D1, R2), com banco **Neon (PostgreSQL)** quando o projeto pede.

Estudo segurança ofensiva e defensiva, participo de CTFs e treino no TryHackMe. Pratico apenas em sistemas próprios ou ambientes autorizados, com escopo definido e divulgação responsável.

## ⭐ Projeto principal: Co(Crie) Seu Ano

<p align="center">
  <a href="https://cocrie-seu-ano.abertos2027.workers.dev"><img src="img/cocrie-seu-ano.jpg" alt="Co(Crie) Seu Ano 2027" width="720"></a>
</p>

<p align="center">
  <a href="https://cocrie-seu-ano.abertos2027.workers.dev"><img alt="Ver a página do Co(Crie) Seu Ano" src="https://img.shields.io/badge/%E2%96%B6%20Ver%20a%20p%C3%A1gina-cocrie--seu--ano-8e1b3a?style=for-the-badge"></a>
  <a href="https://minha-retrospectiva-2026.pages.dev"><img alt="Abrir o bônus: Minha Retrospectiva 2026" src="https://img.shields.io/badge/%F0%9F%8E%81%20B%C3%B4nus-Minha%20Retrospectiva%202026-c6a15b?style=for-the-badge"></a>
</p>

Um **método prático para planejar o ano** (e cumprir o plano), vendido como produto digital. Eu construí o produto de ponta a ponta: a página de vendas, a integração com o pagamento e o **app bônus**, a Minha Retrospectiva 2026, que é o primeiro passo do método. O conteúdo do método e os vereditos da Retrospectiva são da Kath.

```mermaid
flowchart LR
  A["Página de vendas<br/>Cloudflare Workers"] -->|botão de compra| B["Checkout<br/>Kiwify"]
  B -->|cada compra| C["Código individual<br/>de acesso"]
  C --> D["Bônus: Minha Retrospectiva<br/>Pages + Functions + D1"]
  D --> E["Leitura individual<br/>e link para compartilhar"]
```

### 🌅 [A página](https://cocrie-seu-ano.abertos2027.workers.dev) — Co(Crie) Seu Ano

<sub><!-- auto:cocrie-versao -->v0.3.0<!-- /auto:cocrie-versao --> · HTML/CSS/JS sem build · Cloudflare Workers (static assets) · Kiwify</sub>

- **Página de vendas em um arquivo só**, sem framework: carrega rápido no celular, onde a venda acontece.
- Identidade própria (vinho e dourado metálico), contagem regressiva até o fim do ano, FAQ, CTA fixo no celular e cartão de compartilhamento para WhatsApp e redes.
- **Só a pasta `public/` vai ao ar.** A primeira versão publicava o repositório inteiro (README, changelog, workflow); a correção virou regra no `wrangler.jsonc`.
- Versão semântica, changelog e release com os arquivos nomeados pela versão a cada tag.

### 🎁 [O bônus](https://minha-retrospectiva-2026.pages.dev) — Minha Retrospectiva 2026

<sub><!-- auto:retrospectiva-versao -->v0.5.2<!-- /auto:retrospectiva-versao --> · JavaScript · Cloudflare Pages · Functions · D1</sub>

Quiz de 15 perguntas que devolve uma leitura individual, montada por regras que cruzam as respostas, **sem IA**. As alternativas se ordenam arrastando, com animação, no celular e no PC.

- **Acesso só por código individual**: no primeiro uso ele fica ligado ao e-mail e é recusado em qualquer outro.
- **Uma resposta por código, contada no servidor**: limpar o navegador ou trocar de aparelho não libera outra.
- Sem uso simultâneo: entrar em outro aparelho encerra a sessão anterior.
- Link de compartilhamento que mostra só o resultado, sem nome, e-mail ou respostas.
- Dados pessoais com prazo de guarda definido (12 meses) e roteiro para pedidos de titulares (LGPD); liberação de nova resposta pelo suporte com um workflow do GitHub Actions; deploy automático depois dos testes.

## Outros produtos no ar

### 🔮 [Caminhos Abertos 2027](https://caminhos.abertos2027.workers.dev) — venda, pagamento e entrega

<sub><!-- auto:caminhos-versao -->v1.0.1<!-- /auto:caminhos-versao --> · Next.js 16 · TypeScript · Cloudflare Workers · Neon (PostgreSQL) · Mercado Pago</sub>

Loja de uma análise personalizada para 2027, entregue em áudios e PDF. O fluxo vai da venda à entrega sem planilha nem conferência manual de comprovante.

- **O pedido só vira "pago" quando o servidor consulta o Mercado Pago** e confere status, valor, moeda e referência. Voltar para a página de sucesso ou mandar `status=approved` na URL não libera nada.
- Pix e cartão dentro do site pelo Checkout Transparente; formulário de personalização validado com Zod no navegador e de novo no servidor.
- Webhook com assinatura verificada, tolerante a duplicidade e a chegada fora de ordem; um cron reconcilia pagamentos cujo aviso se perdeu.
- Área administrativa com sessão assinada, rate limit por IP na borda, proteção CSRF e limpeza dos dados de pedidos não pagos (LGPD).
- Testes de cada cenário de pagamento (aprovado, pendente, recusado, estorno, valor divergente, Mercado Pago fora do ar) com Vitest e PGlite.

### 🛡️ [HackQuiz](https://hackquiz-blackbox.vercel.app) — aprendizagem em cibersegurança

<sub><!-- auto:hackquiz-versao -->v1.5.5<!-- /auto:hackquiz-versao --> · HTML/CSS/JS · Firebase · Cloudflare Pages</sub>

Plataforma em português para estudar segurança da informação por competências: **<!-- auto:hackquiz-perguntas -->173<!-- /auto:hackquiz-perguntas --> perguntas em <!-- auto:hackquiz-materias -->9<!-- /auto:hackquiz-materias --> matérias**, **<!-- auto:hackquiz-exercicios -->30<!-- /auto:hackquiz-exercicios --> exercícios práticos** e um glossário de <!-- auto:hackquiz-termos -->57<!-- /auto:hackquiz-termos --> termos, com explicações referenciadas e repetição espaçada.

- Red Team e Blue Team, redes, criptografia, Linux e Windows, forense, GRC e Direito Digital, com exercícios baseados em artefatos.
- Regras do Firestore testadas no emulador, cobrindo acessos legítimos e tentativas não autorizadas.
- Correções de segurança reais no próprio app, como XSS armazenado e injeção causada pelo tratamento de caracteres Unicode.
- CSP sem `unsafe-inline`, cabeçalhos de segurança na borda, auditoria de acessibilidade e de contraste (WCAG AA) e CI.

<p align="center"><img src="img/hackquiz.png" alt="Tela do HackQuiz" width="640"></p>

## Em desenvolvimento

| Projeto | O que é | O que mostra | Tecnologias |
|---|---|---|---|
| **FinApp** | Educação e organização financeira, em português e inglês (nome provisório "Grana no Controle") | App full-stack com contas, isolamento de dados por usuário testado, limite de tentativas de login e migração para a Cloudflare com Prisma no Neon por HTTP | Next.js 16 · TypeScript · Prisma · PostgreSQL · Cloudflare Workers |

## Jogos

Projetos em que exercito arquitetura de conteúdo, simulação e testes automatizados fora do contexto web.

| Jogo | Descrição | Tecnologias |
|---|---|---|
| [⚔️ Runas & Hordas](https://runas-e-hordas.pages.dev) | Survivor-like de fantasia medieval: 12 armas, runas ativáveis, chefes por capítulo e save na nuvem; 96 testes da lógica e simulação com bot | HTML5 Canvas · JavaScript · Cloudflare Pages |
| [🌅 Ilumbá](https://ilumba.vercel.app) | RPG 2D de vida e pós-vida; conteúdo em JSON separado da lógica e simulação de vidas inteiras no CI | Godot 4 · GDScript |
| [🌙 Sombraluz](https://sombraluz.pages.dev) | Survivor-like com cidade, classes, equipamentos e ranking online; versão própria para o portal CrazyGames, com anúncios e save pelo SDK | HTML5 Canvas · JavaScript · Firebase · PWA |
| Tharveth *(em desenvolvimento)* | RPG de fantasia sombria para Roblox, com testes de lógica e simulação de combate com latência | Luau · Rojo · Lune |
| Firewall FPS *(em desenvolvimento)* | FPS cooperativo de sobrevivência contra hordas | Unity 6 · C# · FishNet |

## Situação dos projetos

<!-- auto:status -->

| Projeto | Versão | Lançada em | Commits (30 dias) | Site |
|---|---|---|---|---|
| **[Co(Crie) Seu Ano](https://cocrie-seu-ano.abertos2027.workers.dev)** | v0.3.0 | 14/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fcocrie-seu-ano.abertos2027.workers.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://cocrie-seu-ano.abertos2027.workers.dev) |
| **[Minha Retrospectiva 2026](https://minha-retrospectiva-2026.pages.dev)** | v0.5.2 | 13/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fminha-retrospectiva-2026.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://minha-retrospectiva-2026.pages.dev) |
| **[Caminhos Abertos 2027](https://caminhos.abertos2027.workers.dev)** | v1.0.1 | 13/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fcaminhos.abertos2027.workers.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://caminhos.abertos2027.workers.dev) |
| **[HackQuiz](https://hackquiz-blackbox.vercel.app)** | v1.5.5 | 29/10/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fhackquiz-blackbox.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://hackquiz-blackbox.vercel.app) |
| **[Runas & Hordas](https://runas-e-hordas.pages.dev)** | v0.24.0 | 07/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Frunas-e-hordas.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://runas-e-hordas.pages.dev) |
| **[Ilumbá](https://ilumba.vercel.app)** | v0.98.0 | 06/11/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Filumba.vercel.app&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://ilumba.vercel.app) |
| **[Sombraluz](https://sombraluz.pages.dev)** | v0.45.1 | 31/10/2026 | — | [![site](https://img.shields.io/website?url=https%3A%2F%2Fsombraluz.pages.dev&label=&up_message=no%20ar&down_message=fora%20do%20ar&style=flat-square)](https://sombraluz.pages.dev) |

<!-- /auto:status -->

<sub>Tabela, versões e números do HackQuiz atualizados por uma GitHub Action deste repositório. Última mudança: <!-- auto:atualizado -->14/11/2026<!-- /auto:atualizado -->.</sub>

## Competências

| Área | Competências e prática |
|---|---|
| **Produtos digitais** | Página de vendas com foco em conversão no celular, checkout (Kiwify, Mercado Pago), entrega automatizada, acesso por código e LGPD |
| **Segurança de aplicações** | OWASP Top 10, XSS e injeção, validação de entrada, controle de acesso, regras do Firestore, CSP, HSTS, clickjacking, cookies, cabeçalhos HTTP e IP confiável atrás de proxy |
| **Testes e QA** | Testes unitários e de integração, regressão, testes de regras de segurança e de cenários de pagamento, simulação automatizada e CI |
| **Desenvolvimento web** | JavaScript, TypeScript, HTML/CSS, Next.js, aplicações responsivas, PWA e acessibilidade (WCAG AA) |
| **Integração de APIs** | Kiwify, Mercado Pago (checkout, webhooks e conferência do pagamento no servidor), Mercado Livre; validação com Zod |
| **Dados e backend** | Neon/PostgreSQL, Prisma, Drizzle, Cloudflare D1, Firebase/Firestore; regras de acesso e validação no servidor |
| **Cloud** | Cloudflare Workers, Pages, D1, R2 e Web Analytics; OpenNext para Next.js na borda; cabeçalhos e segredos por ambiente |
| **Entrega e automação** | Git, GitHub Actions, CI, versionamento semântico, changelog, releases e deploy por tag |
| **Fundamentos de segurança** | Redes, criptografia, Linux, Windows, forense, GRC, LGPD, CTFs e prática em laboratório |
| **Jogos** | Godot 4/GDScript, Unity/C#, HTML5 Canvas, Luau/Roblox; combate, progressão, conteúdo e simulação |

## Como trabalho

- **Regra de negócio no servidor:** clique, redirecionamento ou comprovante não liberam nada sozinhos; quem decide é o servidor, conferindo na fonte.
- **Qualidade verificável:** testes, simulações e CI para pegar regressões e validar regras, não só o caminho feliz.
- **Segurança desde o desenho:** abuso, autorização e validação fazem parte da funcionalidade, não de uma revisão no fim.
- **Engenharia com critério:** decisões técnicas documentadas, para que mudanças futuras respeitem o contexto do projeto.
- **Entrega versionada:** cada mudança integrada vira versão, changelog e release com os arquivos nomeados pela versão.
- **IA como ferramenta:** uso assistência de IA para acelerar o trabalho, mantendo comigo as decisões, a revisão e a responsabilidade pelo resultado.

## Contato

Aberto a conversar sobre **produtos digitais, segurança de aplicações, QA, integração de pagamentos e desenvolvimento web**, além de oportunidades e projetos técnicos.

[Abra uma issue neste repositório](https://github.com/O-Azevedo/O-Azevedo/issues/new) para entrar em contato.

<p align="center"><sub>Construir com intenção. Testar com rigor. Integrar com cuidado. Publicar com responsabilidade.</sub></p>
