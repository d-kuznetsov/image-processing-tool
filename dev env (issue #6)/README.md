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

```
npm install
```

- If you need image data from the server, run the main app from the root of the repo.
- To start the app in development mode, run the command

```
npm run dev
```

- To start the app in production mode, run the commands

```
npm run build

npm run serve
```

## Setup (Docker)

- if you need image data from the server, run the main app container from the root directory of the repo.
- From `/dev env` directory run commands

#### development

```
build a image
$ npm run docker-build:dev

run the image as a container
$ npm run docker-run:dev

stop the running container
$ npm run docker-stop:dev

start the stopped container
$ npm run docker-start:dev
```

#### production

```
build a image
$ npm run docker-build:dev

run the image as a container
$ npm run docker-run:dev

stop the running container
$ npm run docker-stop:dev

start the stopped container
$ npm run docker-start:dev
```
