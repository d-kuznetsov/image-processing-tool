# Web application for processing images

This simple web application, developed as part of the **web technology course (ss2020)**, allows you to upload and process photos (reduce size and quality, extract a square shape and the primary colors).

![ImageScaling](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-d-kuznetsov/blob/master/docs/images/image-grid.jpeg)

This application can be used with or without Docker.

### Development Environment (with Docker)

If you don't have Docker installed, [install it from here](https://docs.docker.com/get-docker/).

### Setup (with Docker)

1. Сlone this repository.
2. Open your terminal and **cd** into the repository directory.
3. Run the following command to build a image:

**development**

```
docker build --tag image-manager:dev -f Dockerfile.dev .
```

**production**

```
docker build --tag image-manager:prod -f Dockerfile.prod .
```

### Start (with Docker)

1. Run your image as a container

**development**

```
docker run --detach \
--publish 3000:3000 \
--name image-manager \
-v dev-upload-vol:/app/upload \
-v dev-src-vol:/app/src \
image-manager:dev
```

**production**

```
docker run --detach \
--publish 3000:3000  \
--name image-manager \
-v prod-upload-vol:/app/upload \
image-manager:prod
```

2. Visit your application in a browser at http://localhost:3000/.
3. Stop the running container

```
docker stop image-manager
```

### Development Environment (without Docker)

If you don't have Node.js installed, [install it from here](https://nodejs.org/en/).
You'll need Node.js version 10.13 or later.

### Setup (without Docker)

1. Сlone this repository.
2. Open your terminal and **cd** into the repository directory.
3. Run the following command to set up npm packages:

```
npm install
```

### Commonly used npm scripts

Start app in development mode

```
nmp run dev
```

Builds app for production usage

```
npm run build
```

Start production server

```
npm run start
```

### Scaffolding

To use already prepared data, replace `/upload` with `/examples/upload`

### REST-API for getting information about images

if you go to http://localhost:3000/api/get/images, you'll get something like

```js
[
  {
    id: "B1kgzLca_",
    name: "bridge",
    date: "2020-09-19T21:16:12.200Z",
    original: { src: "/api/get/image/original/B1kgzLca_.jpeg" },
    scaled: [
      {
        size: "XS",
        width: 200,
        height: 200,
        src: "/api/get/image/XS/B1kgzLca_.jpeg",
      },
      {
        size: "S",
        width: 267,
        height: 400,
        src: "/api/get/image/S/B1kgzLca_.jpeg",
      },
      {
        size: "M",
        width: 467,
        height: 700,
        src: "/api/get/image/M/B1kgzLca_.jpeg",
      },
      {
        size: "L",
        width: 600,
        height: 900,
        src: "/api/get/image/L/B1kgzLca_.jpeg",
      },
    ],
    colors: ["#d3cdc8", "#1e1e21", "#604f4b", "#6f777e", "#846659"],
  },
  ...
]
```

#### Sort

Use `sort` and `order` (ascending order by default) to sort returned data.

```
GET /api/get/images?sort=name
GET /api/get/images?sort=name&order=desc
```

The following options are available

`sort=name` - sort by image name<br />
`sort=date` - sort by upload date<br />
`sort=color` - sort by main color<br />
`sort=random` - sort in random order<br />
`order=asc` - arrange in ascending order<br />
`order=desc` - arrange in descenting order

#### Paginate

Use `limit` and `page` (limit must be set) to paginate returned data.

```php
GET /api/get/images?limit=10
GET /api/get/images?limit=10&page=5
```

## Contribution

Before submitting your contribution, please make sure to take a moment and read through the following:

### [Code of Conduct](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-d-kuznetsov/blob/master/.github/CODE_OF_CONDUCT.md)

### Requirements

This project was created using JavaScript library [React](https://reactjs.org/) and React Framework [Next.js](https://nextjs.org/). Make sure you understand the basic concepts of these technologies. In addition, basic knowledge of [Tailwindcss](https://tailwindcss.com/) and [Express](https://expressjs.com/) is desirable.

### Code Conventios

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### Git Workflow

In this workflow, we have three branches

- **Master** branch will have production code only. In other words, anything you push to the master branch better be free of bugs.
- **Dev** branch will be the "live" version of your software. This is the branch that developers will push to on a regular basis with new features.
- **Feature** technically is not a single branch. Each feature branch represents a new chunk of code that will eventually be tested and added to the codebase.

The basic steps in this flow are as follows:

1. Create a new branch from the **dev** branch and call it something like **"feature-< describe feature here, or give it an ID >"**
2. Work on your feature, committing to this **feature** branch
3. Test your feature
4. Merge your **feature** into the **dev** branch
5. Delete your **feature** branch
6. Once enough features have been added, prepare your release
7. When the release is tested and prepped, merge the **dev** branch into **master**
8. Tag the **master** branch commit to the correct version (i.e. v1.1)
9. Repeat

## License

This application is [MIT](./LICENSE) licensed.
