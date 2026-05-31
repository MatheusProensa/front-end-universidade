# 🎓 Universidade React

> Site institucional de uma universidade fictícia — moderno, responsivo, acessível e bilíngue. Projeto desenvolvido com **React + TypeScript + Vite**.

<p align="center">
  <img src="public/assets/logo-universidade.png" alt="Universidade React" height="70" />
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="React Router" src="https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white" />
</p>

---

## 📖 Sobre o projeto

O **Universidade React** é um site institucional completo, pensado para passar **credibilidade, organização e captação de alunos** — no padrão dos sites de universidades reais. Começou como um trabalho acadêmico de Aplicação Web e evoluiu para um projeto de portfólio, com identidade visual consistente, várias páginas e recursos profissionais.

🔗 **Repositório:** [github.com/MatheusProensa/front-end-universidade](https://github.com/MatheusProensa/front-end-universidade)

---

## 🖼️ Preview


![Home](https://github.com/user-attachments/assets/baa847f0-8921-425c-8f4c-530362695e71)
)
![Cursos](https://github.com/user-attachments/assets/721768e0-491a-4cbf-b3a4-2c4c7ec801b3)
)
![Estrutura](https://github.com/user-attachments/assets/138bd222-c0ff-4a76-be54-3f43cf3d7a80)
![Estrutura Detalhes](https://github.com/user-attachments/assets/1dd50750-7fa5-4701-b159-3b113991c4f1)



---

## ✨ Funcionalidades

- 🏠 **Home** com hero, estatísticas animadas (count-up), cursos em destaque, galeria do campus (com lightbox), modalidades, depoimentos, notícias e CTA
- 🎓 **Cursos** com busca, filtros por área/modalidade e **modal de detalhes** (grade curricular + mercado de trabalho)
- 📖 **Sobre** com diferenciais, missão/visão/valores, números animados e linha do tempo
- ✉️ **Contato** com canais por setor, mapa, formulário (com validação) e FAQ
- 📝 **Cadastro de Aluno e Professor** com formulários validados e estado de sucesso
- 🤖 **Assistente virtual (chat)** com respostas guiadas e opção de atendimento humano
- ♿ **Acessibilidade**: aumentar/diminuir fonte, alto contraste e integração com **VLibras**
- 📱 **Totalmente responsivo** (desktop, tablet e mobile com menu hambúrguer)
- 🎬 Animações suaves de scroll e hover

---

## 🛠️ Tecnologias

- **React 19** + **TypeScript**
- **Vite** (build e dev server)
- **React Router DOM** (navegação entre páginas)
- **Font Awesome** (ícones)
- **VLibras** (acessibilidade em Libras)
- CSS puro com **design tokens** (variáveis CSS) — sem framework

---

## 🚀 Como rodar o projeto

```bash
# 1. Clone o repositório
git clone https://github.com/MatheusProensa/front-end-universidade.git
cd front-end-universidade

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev

# 4. (Opcional) Gere a build de produção
npm run build
```

O projeto abre em `http://localhost:5173`.

---

## 📁 Estrutura de pastas

```
front-end-universidade/
├─ public/
│  └─ assets/            # imagens (logo, cursos, campus, notícias, depoimentos)
├─ src/
│  ├─ pages/             # páginas do site
│  │  ├─ Home.tsx
│  │  ├─ Cursos.tsx + cursos.css
│  │  ├─ Sobre.tsx + sobre.css
│  │  ├─ Contato.tsx + contato.css
│  │  ├─ CadastroAluno.tsx + cadastroaluno.css
│  │  └─ CadastroProfessor.tsx + cadastroprofessor.css
│  ├─ App.tsx            # navbar, rodapé, chat, acessibilidade, rotas e dados
│  ├─ App.css
│  ├─ index.css          # estilos globais + design tokens
│  └─ main.tsx
└─ index.html
```

---

## ♿ Acessibilidade

O site segue boas práticas de acessibilidade: navegação por teclado com foco visível, textos alternativos, marco `<main>`, *skip link*, suporte a `prefers-reduced-motion`, ajuste de fonte, alto contraste e tradução em Libras via **VLibras**.

---

## 👤 Autor

Desenvolvido por **Matheus Proensa**.

---

## 📄 Licença

Projeto acadêmico de uso livre para fins de estudo e portfólio.
