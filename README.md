# 🌐 BookConnect Front-End

Interface web para a aplicação BookConnect, desenvolvida como SPA (Single Page Application) utilizando HTML, CSS e JavaScript puro, sem frameworks como React, Vue ou Angular.

---

## 🎯 Objetivo

Permitir que usuários cadastrem livros, visualizem livros disponíveis para empréstimo e removam livros do sistema, consumindo a API criada com Flask.

---

## 💻 Como usar

1. Clone ou baixe este repositório
2. Dê **dois cliques** no arquivo `index.html`
3. A página será aberta automaticamente no navegador padrão

> ⚠️ **Importante:** A API Flask (back-end) deve estar rodando em `http://localhost:5000`

---

## ✨ Funcionalidades

- Cadastrar novo usuário
- Cadastrar novo livro
- Visualizar livros em formato de **cards**
- Remover livros do sistema
- Estilização com **Bootstrap 5** + **CSS personalizado**

---

## 📡 Rotas da API consumidas

Este front-end realiza chamadas `fetch` para as seguintes rotas da API:

- `POST /usuarios` → Cadastrar usuário
- `POST /livros` → Cadastrar livro
- `GET /livros` → Listar livros
- `DELETE /livro/<id>` → Excluir livro

---

## 🛠️ Requisitos atendidos

- Separação entre front-end e back-end ✅
- SPA funcional com JavaScript puro ✅
- Consumo de todas as rotas da API ✅
- Estilo com Bootstrap + CSS customizado ✅
- Interface simples, leve e interativa ✅
