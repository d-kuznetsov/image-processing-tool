## Web application for processing images (Web technologies, summer semester 2020)
This simple web application, developed as part of the web technology course, allows you to upload and process photos (reduce size and quality, extract a square shape and the primary colors).

This application can be used with or without Docker.

### Development Environment (with Docker)
If you don’t have Docker installed, [install it from here](https://docs.docker.com/get-docker/).

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
If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/).
You’ll need Node.js version 10.13 or later.

### Setup (without Docker)
1. Сlone this repository. 
2. Open your terminal and **cd** into the repository directory.
3. Run the following command to set up npm packages:
```
npm install
```
 ### Start (without Docker)
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