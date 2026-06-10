# SIGA - Sistema de Gestao dos Associados

Projeto academico da disciplina de Tecnologias de Desenvolvimento Web II.

O SIGA e uma plataforma web para gerir associados, candidaturas, quotas, pagamentos, recibos, atividades profissionais, dashboard, utilizadores e permissoes.

## Tecnologias

- Node.js
- Express.js
- EJS
- Bootstrap 5
- MySQL
- Sequelize
- Git/GitHub

## Como abrir o projeto

1. Clonar o repositorio:

```bash
git clone https://github.com/cc-cardoso/SIGA.git
```

2. Entrar na pasta:

```bash
cd SIGA
```

3. Abrir no VS Code:

```bash
code .
```

4. Instalar dependencias:

```bash
npm install
```

5. Criar o ficheiro `.env` a partir do exemplo:

```bash
copy .env.example .env
```

6. Iniciar o servidor:

```bash
npm run dev
```

7. Abrir no browser:

```text
http://localhost:3000
```

## Divisao do grupo

O grupo tem 4 elementos:

| Elemento | Modulo principal |
|---|---|
| 1 | Gestao de associados |
| 2 | Gestao financeira, quotas, pagamentos e recibos |
| 3 | Gestao de atividades profissionais |
| 4 | Administracao, autenticacao, permissoes e dashboard |

Mais detalhes estao em `docs/divisao-trabalho.md`.

## Estrutura

```text
src/
  config/
  controllers/
  middlewares/
  models/
  public/
  routes/
  services/
  views/
docs/
  diagramas/
```

