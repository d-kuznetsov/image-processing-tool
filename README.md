# Web application for processing images

This simple web application, developed as part of the **web technology course (ss2020)**, allows you to upload and process photos (reduce size and quality, extract a square shape and the primary colors).

This application can be used with or without Docker.

### Development Environment (with Docker)

If you don't have Docker installed, [install it from here](https://docs.docker.com/get-docker/).

### Setup (with Docker)

1. Сlone this repository.
2. Open your terminal and **cd** into the repository directory.
3. Run the following command to build a image:

```
docker build --tag image-manager:1.0 .
```

### Start (with Docker)

1. Run your image as a container

```
docker run --publish 8000:3000 --detach --name image-manager image-manager:1.0
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

## REST-API for getting information about images

if you go to http://localhost:3000/api/get/images, you'll get something like

```
[
  {
    "id": "1234567",
    "name": "image-name.jpeg",
    "date": "2020-09-11T23:34:25.507Z",
    "colors": [
      "#e09765",
      "#3c3630",
      "#8b7567",
      "#958f8d",
      "#a8a599"
    ]
  },
]
```

### Sort

Use `sort` and `order` (ascending order by default) to sort returned data.

```
GET /api/get/images?sort=name
GET /api/get/images?sort=name&order=desc
```

The following options are available

`sort=name` - by image name<br />
`sort=date` - by upload date<br />
`sort=color` - by main<br />
`sort=random` - in random order<br />
`order=asc` - in ascending order<br />
`order=desc` - in descenting order

### Paginate

Use `limit` and `page` (limit must be set) to paginate returned data.

```
GET /api/get/images?limit=10
GET /api/get/images?limit=10&page=5
```

## Contribution

Before submitting your contribution, please make sure to take a moment and read through the following:

### [Code of Conduct](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2020-d-kuznetsov/blob/master/.github/CODE_OF_CONDUCT.md)

### Requirements

This project was created using JavaScript library [React](https://reactjs.org/) and React Framework [Next.js](https://nextjs.org/). Make sure you understand the basic concepts of these technologies. In addition, basic knowledge of [SASS](https://sass-lang.com/) and [Express](https://expressjs.com/) is desirable.

### Code Conventios

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) and [BEM](http://getbem.com/)

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
