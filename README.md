<h1 align="left">
  Learn nestJs with Zaidi
</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
---
Elaboration de l'appi

Les erreurs ou bugs
--
1 - ERROR [TypeOrmModule] Unable to connect to the database. Retrying (1)...
QueryFailedError: Table 'users' already exists

=> Solution : Dans app.modules : passer synchronize en false,




TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'zyadain',
    password: '14101983',
    database: 'GCV',
    entities: [UserEntity],
    //autoLoadEntities:true,
    synchronize: false,
  })



2 - [Nest] 20445 - 25/11/2022 15:54:19 ERROR [ExceptionsHandler] You must provide selection conditions in order to find a single row. Error: You must provide selection conditions in order to find a single row. at EntityManager.findOne (/Users/Nicolas/Desktop/NestJS/nest-auth/src/entity-manager/EntityManager.ts:1094:19) at Repository.findOne
--Explication : Incompatibilit?? entre la nouvelle version de typeorm et l'anienne

Solution :



The problem was that I was using the newer versions of Typeorm (3.1), and the last version of NestJS (9.1.4) and I have read that they dropped support for ormconfig.{json,xml} files. So you need to put your database connection options in a ts or js file using a Data Source and export it.

For me, the solution that work was, downgrade your typeorm to 0.2.45:

npm i typeorm@0.2.45;

the other solution is: Update your code following the new Typeorm docs.

The solution was given by: Luis Vinicius M.

Install validation files




---
## Stay in touch

- Author - [Zaidi Abdelilah](https://www.linkedin.com/in/abdelilah-zaidi-128178b3/)
- Website - [https://nestjs.com](https://nestjs.com/)


## License

Nest is [MIT licensed](LICENSE).
