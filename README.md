# Create React App + React Router + Express + Docker

## tl;dr
This is a quick starter repo for new React projects. It's mainly for myself but if you find it useful please use / fork as you wish.

This starter makes use of:

- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React Router v3](https://github.com/ReactTraining/react-router)
- [Express](http://expressjs.com/)
- [Docker](https://www.docker.com/)

## Development

Clone this repository:

```sh
git clone https://github.com/applification/react-redux-express-docker.git
cd react-redux-express-docker
```

Install npm dependencies:

```sh
npm install
```

Start the project at [`http://localhost:3000`](http://localhost:3000).

```sh
npm start
```

## Running with Docker

```sh
docker build -t react-starter .
```

```sh
docker run -p 80:9000 --name react-starter-instance react-starter
```

## Testing

```sh
npm test
```

## help

### Create React App
This starter is simply the out of the box Create React App with a few of the key additions you will need to have a full functioning app running on a server.

[Create React App ReadMe](https://github.com/facebookincubator/create-react-app) is very comprehensive, use that for help on how to run and tweak things under the hood.

[React Router v3](https://github.com/ReactTraining/react-router) is used for *client side* routing.

[ExpressJS](http://expressjs.com/) is used to put the Production Build from Create React App into a server environment for the *server side* routing.

[Docker](https://www.docker.com/) is used for deployment to a wide variety of web hosts. 
