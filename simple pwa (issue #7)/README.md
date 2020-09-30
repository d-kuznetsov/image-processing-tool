# Development Environment

### This development environment supports the following features:

- hot reloading in development mode
- optimization & minification of code in production mode
- ability to use the latest javascript features (including experimental syntax)
- support for SASS preprocessor
- code quality control by ESlint
- css, images, fonts import
- source maps in development mode and more

## Setup

If you don't have Node.js installed, [install it from here](https://nodejs.org/en/).

- Сlone this repository.
- Open your terminal and **cd** into the `/dev env` directory of repo.
- Run the following command to set up npm packages:

```bash
$ npm install
```

- If you need image data from the server, run the main app from the root of the repo.
- To start the app in development mode, run the command

```bash
npm run dev
```

- To start the app in production mode, run the commands

```bash
$ npm run build

$ npm run serve
```

## Setup (Docker)

To launch the app using Docker run the following commands

#### development

```bash
$ docker-compose -f docker-compose.dev.yml up
```

#### production

```bash
$ docker-compose -f docker-compose.prod.yml up
```
