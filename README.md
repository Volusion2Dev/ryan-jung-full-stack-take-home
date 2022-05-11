# Full Stack Take Home Challenge: Site Builder

We have a prototype Site Builder UI to allow users to build and customize the look and feel of their site, using blocks (widgets).

![demo](docs/demo.gif)

## Instructions

The app is currently retrieving a list of default blocks from the server. In this iteration we need to:

- [ ] add an endpoint and wire up the UI for creating a block.
- [ ] add a new preview mode that users can toggle that removes the sidebar and makes editable fields no longer editable.

Feel free to refactor the existing code.

## Technical Overview

We are using the following technologies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Jest](https://jestjs.io/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Postgres](https://www.postgresql.org/) with [pg-promise](https://github.com/vitaly-t/pg-promise#pg-promise)
- [Typescript](https://www.typescriptlang.org/index.html)

If you are unfamiliar with Typescript, here is a [short introduction](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). You may also use the [any type](https://www.typescriptlang.org/docs/handbook/basic-types.html#any) for parameters or variables as a quick way to sidestep the full type checking. The Block model is located in the [types.d.ts](src/types.d.ts) file.

## Getting Started

### Prerequisites

- Docker
- Node version 12.14.1. It may work on other versions of Node, but it has only been tested on 12.14.1

### Installation and running the app

First install the dependencies and run the docker container for Postgres. After the Docker container has finished loaded, run the development server.

```bash
npm install
npm run docker

# new terminal
npm run compile:watch

# new terminal
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to get familiar with the app.

- edit text by clicking into the text field for the Header or Hero block.
- when you hover over a block, it will show "+" buttons for adding a new block at that location. Click the "+" button and then choose a block from the left-side panel to add.
- you may delete a block by hovering over the block and clicking the delete icon to the right.

There are some passing [unit tests](src/__test__/) and a few failing [integration tests](src/server/__test__/index.test.ts)

```bash

# unit tests
npm test
# or in watch mode
npm run test:watch

# integration tests, requires docker & server to be running
npm run test:api
```

Since we are using [nodemon](https://nodemon.io/), you don't need to restart the server to see your changes. However, there will be a delay in reloading after you make changes to the server code so be sure to watch the server output before re-running the API tests.

## Postgres

Postgres is run inside a Docker container using [docker-compose](docker-compose.yml). The first time it is started, either with the npm script `npm run docker` or with `docker-compose up`, it will create a [block table](db/postgres/schema.sql) inside a site_builder schema and add 3 records.

There are some npm scripts you may use to query the database

```bash
# if you haven't already
npm run docker

# new terminal
# connect to local Postgres. Requires psql installed on your system.
npm run psql

# run a select query against the block table.
npm run psql:blocks

# after finishing the exercise
# you can remove the docker volume by running
npm run docker:clean
```

## Final thoughts

We realize your time is valuable and therefore recommend spending no more than 2 to 3 hours on this exercise. We thank you so much for your interest in joining our Volusion team and taking the time to work on this assignment.

**Please rest assured that your work will not be used outside of this interview process.**

Good luck!
