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

```bash
$ cp .env.example .env
```

## Running the app

```bash
# build the files before running
$ npm run build

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Running in docker

```bash
$ docker-compose up -d
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

- [ ] Logging: Pino
- [ ] Docker: build from cache
- [ ] Service Discovery
- [ ] Health checking: Terminus
- [ ] Testing
- [ ] CI/CD
- [ ] Infrastructure as Code
- [ ] Semantic Releases
- [X] Webpack hot reloading
- [ ] Migrations
- [ ] Dataloader
- [ ] Caching