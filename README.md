---

# Corelab Web Challenger - Frontend

Este é o frontend da aplicação Corelab Challenger, desenvolvido em React com TypeScript.


## Instalação

1. Clone o repositório:

```sh
git clone git@github.com:crramires/corelab-web-challenger.git
```

2. Entre na pasta do projeto:

```sh
cd corelab-web-challenger
```

3. Instale as dependências:

```sh
npm install
```

## Rodando a aplicação

```sh
npm start
```

* O frontend será iniciado em `http://localhost:3000`.
* Certifique-se de que o backend está rodando na porta `3333`.

## Observações

* O frontend consome a API disponível em `http://127.0.0.1:3333`.
* Certifique-se de que o backend está configurado corretamente para permitir CORS do frontend.

---

# Corelab API Challenger - Backend

Este é o backend da aplicação Corelab Challenger, desenvolvido em AdonisJS 5 com TypeScript.

## Pré-requisitos

* Node.js >= 18
* npm
* PostgreSQL

## Configuração

1. Clone o repositório:

```sh
git clone git@github.com:crramires/corelab-api-challenger.git
```

2. Entre na pasta do projeto:

```sh
cd corelab-api-challenger
```

3. Instale as dependências:

```sh
npm install
```

4. Crie o arquivo `.env` (ou use o existente) com as seguintes variáveis:

```
DB_CONNECTION=pg
APP_KEY=acBZTOxn38iq_UnmDXNChPyZb0b187t-
NODE_ENV=development
PORT=3333
HOST=0.0.0.0

PG_HOST=127.0.0.1
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=123
PG_DB_NAME=corelab_api
DRIVE_DISK=local
```

5. Crie o banco de dados no PostgreSQL com o nome definido em `PG_DB_NAME`.

6. Rode as migrations:

```sh
node ace migration:run
```

## Rodando a aplicação

```sh
node ace serve --watch
```

* O backend será iniciado em `http://127.0.0.1:3333`.
* Certifique-se de que o frontend está apontando para esta URL.

## Observações

* Habilite CORS no backend para permitir que o frontend em `http://localhost:3000` faça requisições.
* Você pode criar, listar, atualizar e marcar favoritos os Todos através da API.
