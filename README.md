<h1 align="center">Olá, eu sou o O-Azevedo 👋</h1>

<p align="center">
  <b>Desenvolvedor de jogos e aplicações web</b> · cibersegurança · engenharia assistida por IA<br>
  <sub>Game & web developer building shipped, tested projects with AI-assisted engineering.</sub>
</p>

<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=000">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-000?style=flat-square&logo=nextdotjs&logoColor=fff">
  <img alt="Godot" src="https://img.shields.io/badge/Godot_4-478CBF?style=flat-square&logo=godotengine&logoColor=fff">
  <img alt="Unity" src="https://img.shields.io/badge/Unity_6-000?style=flat-square&logo=unity&logoColor=fff">
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=fff">
  <img alt="Firebase" src="https://img.shields.io/badge/Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=fff">
  <img alt="Electron" src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=fff">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=fff">
  <img alt="Claude Code" src="https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=fff">
</p>

---

Construo projetos **do começo ao fim**: código, testes, publicação e versão.
Tudo o que está abaixo roda de verdade, com link para abrir agora, e cada
lançamento sai com tag, changelog e arquivos com a versão no nome.

## 🚀 Projetos em destaque

### 🛡️ HackQuiz — aprender cibersegurança, em português
**[▶ Abrir o app](https://hackquiz-blackbox.vercel.app)** · HTML/CSS/JS puro · Firebase · Electron · Vercel

<a href="https://hackquiz-blackbox.vercel.app"><img src="img/hackquiz.png" alt="Tela inicial do HackQuiz: os quatro níveis de conhecimento e o painel de progresso" width="100%"></a>

Plataforma de estudo com **173 perguntas em 9 matérias**, cada uma com uma
explicação pesquisada e fontes citadas, mais 30 exercícios práticos (nmap,
grep, sub-rede, permissões Linux, TLS…) com números gerados para não decorar.

- **Medição de proficiência** que combina acerto, nível cognitivo e retenção, e decide a ordem do estudo; **repetição espaçada** (Leitner).
- **Segurança levada a sério:** as regras do Firestore são a única barreira (não há backend), e são testadas com **133 ataques no emulador**; CSP sem `unsafe-inline` e cabeçalhos de segurança na Vercel.
- **10 suítes de teste** num runner próprio, auditoria de **contraste WCAG AA** e de acessibilidade por teclado, e um auditor que reprova a documentação quando ela diverge do código.
- Sem build step e sem framework: abre com duplo-clique e funciona offline.

<sub>Código privado · demonstração pública no link acima.</sub>

---

### 🌀 RPG Espiritual — a vida inteira, e o que vem depois
**[▶ Jogar no navegador](https://rpg-espiritual.vercel.app)** · **[⬇ Instalador para Windows](https://github.com/O-Azevedo/RPG_espiritual/releases/latest)** · Godot 4 · GDScript · [código](https://github.com/O-Azevedo/RPG_espiritual)

<a href="https://github.com/O-Azevedo/RPG_espiritual"><img src="img/rpg-mapa.png" alt="RPG Espiritual: personagem na cidade em pixel art, com a ficha de atributos e o diário de acontecimentos" width="100%"></a>

RPG 2D em pixel art no estilo BitLife: você vive meio ano por vez, estuda,
trabalha, forma família e escolhe um caminho espiritual; depois da morte o jogo
continua no plano espiritual, até reencarnar. Instalador próprio (Inno Setup),
exportação para web e releases versionadas.

---

### ⚔️ Sombraluz: Horda Arcana · 🪓 Runas & Hordas
**[▶ Jogar Sombraluz](https://sombraluz.vercel.app)** ([código](https://github.com/O-Azevedo/sombraluz)) · **[▶ Jogar Runas & Hordas](https://runas-e-hordas.vercel.app)** · HTML5 Canvas · Capacitor · Electron

Dois survivor-likes para celular e navegador: você só move o personagem, as
armas atacam sozinhas, e a cada nível escolhe uma carta. Entre as partidas há
classes, equipamentos com raridade, missões e loja.

- JavaScript puro, sem engine; o mesmo código vira **site, APK Android e instalador Windows**.
- Lógica do jogo coberta por testes (26 e 66) e uma **simulação com bot** para testar o balanceamento em velocidade acelerada.
- Pipeline de release no GitHub Actions: cada tag publica o APK, o `.exe` e o build web.

<sub>Runas & Hordas: código privado · demonstração pública.</sub>

---

### 🔧 Em desenvolvimento

| Projeto | O que é | Stack |
|---|---|---|
| **Firewall FPS** *(codinome)* | FPS cooperativo de sobrevivência contra hordas | Unity 6 · C# · FishNet (multiplayer) |
| **APP Financeiro** *(codinome)* | Plataforma de educação e organização financeira, em PT e EN | Next.js 16 · TypeScript · Prisma · PostgreSQL · Tailwind |

## 🤖 Como eu trabalho: engenharia assistida por IA

Uso IA (**Claude Code**) como parte do processo, não como atalho. O que faz
isso funcionar é a parte que continua sendo minha: decidir, verificar e manter.

- **Cada projeto tem um guia de decisões** (`CLAUDE.md`) com o *porquê* de cada escolha, para nenhuma mudança desfazer uma decisão sem saber.
- **Nada entra sem passar pela verificação:** testes automatizados, auditorias de contraste e acessibilidade, testes de ataque às regras de segurança e CI em todo pull request.
- **Agentes com papéis separados** no HackQuiz: pesquisa de currículo, autoria, revisão que reabre as fontes, e auditoria — quem escreve não aprova o próprio trabalho.
- **Fluxo de produção:** branch, pull request, CI verde, versão semântica, changelog e release com os arquivos de cada versão.

## 📫 Contato

Abra uma [issue](https://github.com/O-Azevedo/RPG_espiritual/issues) em qualquer projeto público ou me chame pelo GitHub.
