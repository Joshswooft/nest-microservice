## Description

A template for a micro-service backend system using NEST with mongodb and graphQL. 


## Features

- Code first approach to graphql using Typegraphql and apollo federation
- Code standardization: Linting, prettier, commitlints and husky
- CI: Github Actions
- Built in Database support: Postgres
- ORM


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## TODO:

- Logging: Pino
- Docker: build from cache
- Service Discovery
- Health checking: Terminus
- Testing
- CI/CD
- Infrastructure as Code
- Semantic Releases
- Webpack hot reloading
- Migrations