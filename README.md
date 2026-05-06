# 🏋️ GymPass Style API

<p align="center">
  <img src="./.github/banner.png" alt="GymPass Style API Banner" width="100%" />
</p>

API REST inspirada no modelo do GymPass, desenvolvida com Node.js, TypeScript, Fastify e Prisma, aplicando princípios SOLID para garantir escalabilidade, manutenção simples e código limpo.

---

# 🚀 Tecnologias Utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=nodejs,typescript,fastify,postgres,docker,prisma" />
</p>

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- PostgreSQL
- Docker
- Zod
- Vitest
- TSX
- TSUP

---

# 📌 Funcionalidades

## 👤 Usuários

- Cadastro de usuários
- Autenticação com JWT
- Visualização de perfil
- Histórico de check-ins
- Contagem total de check-ins

---

## 🏋️ Academias

- Cadastro de academias
- Busca por nome
- Busca por proximidade (até 10km)

---

## ✅ Check-ins

- Realização de check-in
- Validação de check-in
- Regras de distância e limite diário

---

# 📋 Regras de Negócio

- Não permitir cadastro com e-mail duplicado
- Não permitir 2 check-ins no mesmo dia
- Check-in permitido apenas até 100m da academia
- Check-in validável somente até 20 minutos após criação
- Apenas administradores podem validar check-ins
- Apenas administradores podem cadastrar academias

---

# ⚙️ Requisitos Não Funcionais

- Senhas criptografadas
- Persistência com PostgreSQL
- Paginação de listas com 20 itens por página
- Autenticação via JWT

---

# 🧠 Conceitos Aplicados

- SOLID
- Clean Architecture
- Repository Pattern
- Factory Pattern
- Testes E2E e Unitários
- Validação com Zod
- Docker para ambiente isolado

---

# 🏗️ Arquitetura da Aplicação

<p align="center">
  <img src="./.github/architecture.png" alt="Arquitetura da Aplicação" width="900px" />
</p>

```txt
Client → Fastify API → Use Cases → Prisma ORM → PostgreSQL
                 ↓
             JWT Auth
                 ↓
              Vitest
```

---

# 🐳 Como executar o projeto

## Clone o repositório

```bash
https://github.com/Luiz-H-Santos/api-solid.git
```

---

## Acesse a pasta

```bash
api-solid
```

---

## Instale as dependências

```bash
npm install
```

---

## Configure as variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.example`.

---

## Suba o banco com Docker

```bash
docker-compose up -d
```

---

## Execute as migrations

```bash
npx prisma migrate dev
```

---

## Inicie a aplicação

```bash
npm run dev
```

---

# 🧪 Executando os testes

## Testes unitários

```bash
npm run test
```

## Testes E2E

```bash
npm run test:e2e
```

---

# 🔐 Autenticação

A aplicação utiliza JWT (JSON Web Token) para autenticação e autorização dos usuários.

---

# 📷 Preview da API

## Swagger / Endpoints

<p align="center">
  <img src="./.github/swagger-preview.png" alt="Swagger Preview" width="100%" />
</p>

---

# 📖 Estrutura do Projeto

```bash
src/
 ├── controllers/
 ├── use-cases/
 ├── repositories/
 ├── http/
 ├── lib/
 ├── env/
 └── utils/
```

---

# 📄 Licença

Este projeto foi desenvolvido para fins de estudo e aprimoramento em desenvolvimento backend.
