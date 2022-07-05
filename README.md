# Store Node API Project

## Introduction

Store Node API Project supply the Javascript API to create an online storefront to showcase products.

This app will be able to browse an index of all products, see the specifics of a single product, and add products to an order in a cart page. 


## Tech Stack (Dependencies)

### Backend Dependencies

This project needs to have installed NodeJS and npm.

Our tech stack from npm will include the following:

- **Postgres** for the database (v.12)
- **Typescript** as our programming language to development
- **Jasmine and Supertest** as our tests libraries
- **Node/Express** for the application logic
- **Cors** from npm for cors
- **dotenv** from npm for managing environment variables
- **db-migrate** from npm for migrations
- **jsonwebtoken** from npm for working with JWTs

Also **docker** is required for this project.

### Front end Dependencies

There are not Frontend in this version.

## Getting Started

- To get started, clone this repo:

    ```git clone https://github.com/jaguilarweb/store-node-api.git```

- Run `npm install` in your terminal at the project root.

- Base URL: At present this app can only be run locally and is not hosted as a base URL. The backend app is hosted at the default, http://localhost:3000.

### Docker

To up the Postgres database container, use the command:
``` docker-compose up -d postgres```

### Database

To setup postgres database use migrations

```db-migrate up```

### Environment variables

You need create a .env file in the root. Please copy the environment variables from .example-ev file and fill it.

Just for elearning purpose I added the enviroment value.
Please, you never do it in your projects.

```
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=full_stack_db
POSTGRES_TEST_DB=full_stack_dev_test
POSTGRES_USER=full_stack_user
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=some-words-to-security
SALT_ROUNDS=10
TOKEN_SECRET=ultra-secret-word
```

### Scripts
To develop environment run: ```npm run watch```
To test run: ```npm run test```

### Ports
- Api is listening by the port **3000**
- Postgres are listening by the port **5432** (docker-compose)


## Disclaimer
- Disclaimer: This is a proposal or test project and your use of the code is under your own accountability.

- Trademarks: Any of the trademarks, service marks, collective marks, design rights, personality rights or similar rights that are mentioned, used or cited in this project are the property of their respective owners. Their use here does not imply that you may use them for any other purpose other than for the same or a similar informational use as contemplated by the original authors.

## Author
 Udacity provides the case and Jenny Aguilar (@jaguilarweb) suggests the solution.