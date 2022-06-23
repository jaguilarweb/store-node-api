# Store Node API Project

## Introduction

## :construction:

Store Node API Project supply the Javascript API to create an online storefront to showcase products.

This app will be able to browse an index of all products, see the specifics of a single product, and add products to an order in a cart page. 


## Tech Stack (Dependencies)

### Backend Dependencies

This project needs to have installed NodeJS and npm.

Our tech stack from npm will include the following:

- **Postgres** for the database (v.12)
- **Typescript** as our programming language to development
- **Jasmine and Supertes** as our tests libraries
- **Node/Express** for the application logic
- **dotenv** from npm for managing environment variables
- **db-migrate** from npm for migrations
- **jsonwebtoken** from npm for working with JWTs

Also docker is required for this project.

### Front end Dependencies

There are not Frontend in this version.

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `npm install` in your terminal at the project root.

### Docker

To up the Postgres database container, use the command:
``` docker-compose up ```

### Running local
To run local: ```npm run start```

### Open a browser

Open your browser and write a request like:
```http://localhost:3000```


## API Reference

### Getting Started

- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, http://localhost:3000.
- Authentication: This version of the application does not require authentication or API keys.

### Endpoints

#### GET '/api'

- General
  - This endpoint should return a simple string with **"Welcome, enjoy the api!"**, and status 200.

#### GET '/..'

Reference
- General
  - This endpoint should return a resize image.
  - You need to provide 3 parameters:
    * filename (string between the choices below)
    * width (number greater than 0)
    * hight (number greater than 0 )

Reference
This application allow following choices to filenames:
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

Example:

```http://localhost:3000/```




## Disclaimer
- Disclaimer: This is a proposal or test project and your use of the code is under your own accountability.

- Trademarks: Any of the trademarks, service marks, collective marks, design rights, personality rights or similar rights that are mentioned, used or cited in this project are the property of their respective owners. Their use here does not imply that you may use them for any other purpose other than for the same or a similar informational use as contemplated by the original authors.

## Author
 Udacity provides the case and Jenny Aguilar (@jaguilarweb) suggests the solution.