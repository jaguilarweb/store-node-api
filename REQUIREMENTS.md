# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

# API Endpoints

## GET '/'
- General
  - This endpoint should return a simple string with **"Welcome, enjoy the api!"**, and status 200.

## Products
### GET '/products' (Index)

- General
  - This endpoint should return a list of products.

* Sample: run in the terminal  `curl http://localhost:3000/products`

- Return value

```
  [ 
    {"id":1,"name":"book","price":20},
    {"id":2,"name":"pencil","price":3},
    {"id":3,"name":"notebook","price":25},
    {"id":4,"name":"folder","price":15}
 ]
```

### POST'/products' (Create)

- General
  - This endpoint create new products, which require the name and price.
  - On the other hand a token is required. Tokens are created with the users.

* Sample: run in the terminal  `curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -d '{"name":"eraser", "price":2}' http://127.0.0.1:3000/products `

- Return value

```
{"id":9,"name":"eraser","price":2}
```

### GET'/products/{id}' (Show)

- General
  - This endpoint show specific products, which require their id as parameter

* Sample: run in the terminal  `curl http://localhost:3000/products/1`

- Return value

```
{"id":1,"name":"book","price":20}
```

## USERS
### GET '/users' (Index)

- General
  - This endpoint should return a list of users. The user passwords are encrypted (bcrypt).

* Sample: run in the terminal  `curl http://localhost:3000/users`

- Return value

```
  [ 
    {"id":1,"firstname":"Maria","lastname":"Lovos","password":"$2b$10$4RVSZzgDCRFD/.beXtBQg.CUEHoRa0fp.xB7zCkOYPmxiCowtsJF6"},
    {"id":2,"firstname":"Barbara","lastname":"Montero","password":"$2b$10$Z3SWHTY58yoP0hQJquf9LO58h2z/Sq5CvGnIN77BafKT5qLv755IK"},
    {"id":3,"firstname":"Ana","lastname":"Romero","password":"$2b$10$Chx9L56OPlg10YWmOfo93Ok1OcdESsGGTtY4GQg7aX47Od1Dc.XS6"},
    {"id":4,"firstname":"Raul","lastname":"Reveco","password":"$2b$10$r14NkARq9G2yrBuk6A3Nfu05b4/9.QD41xPc.RaJwxPX/vAEyzM96"}
  ]
```

### POST'/users' (Create)

- General
  - This endpoint create new users, which require the firsname, lastname and password.

* Sample: run in the terminal  `curl -X POST -H "Content-Type: application/json" -d '{"firstname":"eraser", "lastname":"Reveco", "password":"password123"}' http://127.0.0.1:3000/users `

- Return token

```
""eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMywiZmlyc3RuYW1lIjoiZXJhc2VyIiwibGFzdG5hbWUiOiJSZXZlY28iLCJwYXNzd29yZCI6IiQyYiQxMCQ4OW9ocGVpRXdrMTMxU2MvcFMuNERlYnI0L2FQbjMvYXRHQ1FuQTNRdlp6enJOWXdobWNoaSJ9LCJpYXQiOjE2NTY4NDQwNzJ9.mb63ChGeTj8N0SZEuWKt1AoFFyZy4Fe1-9_6fufO8Mo"% "
```

### GET'/users/{id}' (Show)

- General
  - This endpoint show specific users, which require their id as parameter

* Sample: run in the terminal  `curl http://localhost:3000/users/2`

- Return value

```
{"id":2,"firstname":"Barbara","lastname":"Montero","password":"$2b$10$Z3SWHTY58yoP0hQJquf9LO58h2z/Sq5CvGnIN77BafKT5qLv755IK"}
```


## Orders
- Current Order by user (args: user id)[token required]

### GET'/users/{id}/orders'

- General
  - This endpoint display list of orders by user, which require their id as parameter
  - Also token is required.

* Sample: run in the terminal  `curl -X POST -H "Authorization: Bearer <token>" http://127.0.0.1:3000/users/2/orders `

- Return value

```
  [
    {"id":1,"status":"Active","user_id":"2"},
    {"id":3,"status":"Complete","user_id":"2"},
    {"id":4,"status":"Active","user_id":"2"}
  ]
```


## Data Shapes

### Product Table
  id SERIAL PRIMARY KEY
  name VARCHAR(150)
  price integer

### Product Model
  id?: number
  name: string
  price: number

### User Table
  id SERIAL PRIMARY  KEY
  firstName VARCHAR(100)
  lastName VARCHAR(100)
  password VARCHAR(100)

### User Model
  id?: number
  firstname: string
  lastname:string
  password: string

### Orders Table
  id SERIAL PRIMARY KEY
  status varchar(64)
  user_id integer

### Orders Model
  id?: number
  status: string
  user_id: number

### Orders_Products Table (Help table)
  id SERIAL PRIMARY KEY
  quantity integer
  order_id integer
  product_id integer
