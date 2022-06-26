# Instructions

clone repo:

``` git clone git@github.com:udacity/nd0067-c2-creating-an-api-with-postgresql-and-express-project-starter.git ```

Install initial dependencies:

```npm install```

Install enviroment and migrations dependencies:

```npm i dotenv```
```npm install -g db-migrate```
```npm install db-migrate db-migrate-pg```

I update the ts-node dependency
```npm install ts-node@10.6.0 --save-dev```

Create the database.ts and database.json

Create the initial endpoints on the server file and check with postman.

Create the data shape of products table

## Data Shapes
#### Product
-  id: number
- name: string
- price: number

Table Products
-  id: SERIAL PRIMARY KEY 
- name: VARCHAR(150)
- price: INTEGER


To create db with docker and migrations:
1.- Down psql and any other app that they are working in 5432 port
2.- Up docker
3.- To up the container and postgres service: ```docker-compose up -d postgres```
4.- Use the command ```db-migrate create products-table --sql-file```

The migrations directory will be created

5.- In the "migrations" directory fill the files with create and drop tables.
6.- Run ``` db-migrate up ```

The table will be created

You can check running 
- ``` docker-compose exec postgres bash ```
- ``` :/# psql -h localhost -d name_database -U name_user ```

Create a initial product model

Create a product handler

Summary:
- Create the data shape
- Create tables with migrations
- Create models
- Create handlers



Install bcrypt

```npm i bcrypt```
```npm i --save-dev @types/bcrypt```

Install jsonwebtoken

```npm i jsonwebtoken```
```npm i --save-dev @types/jsonwebtoken```