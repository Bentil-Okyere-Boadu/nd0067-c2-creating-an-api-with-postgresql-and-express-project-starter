# Instructions to get this project up and running.

#### 1. Set env variables as presented in the .env.example 
#### 2. Run npm install or yarn install to install dependencies.
#### 3. Run npm run watch to start server. Server runs on port 8000.
#### 4. Run npm run test to run testing.

## Endpoints
| Endpoint      | params / body example |Description |
| -----------   | -----------   |----------- |
|get  /            |                 |Displays 'Welcome to StoreFront API       |
| post /login  | { 'firstname': 'tom', 'password': 'password'}|User login|
| get /users  |                                            |Get all Users |
| get /users/:id  |  integer                                      |Get specific user |
| post /users  |   { 'firstname':"tom", 'lastname': "kuku",'password':"password"}                |Get specific user |
| post /orders | {"product_id": 3,"quantity": 2,"user_id": 1,"status":"completed"} | create new order |
|get /orders | | Get all orders |
|get /orders/:id | integer | get order by id|
| get /products | | Get all products |
| get /products/:id | integer | get product by id |
| post /products | {    "name": "Aloe Vera ultra soap","price": 20,      "category": "soap" } | create new product |
|get /orders/user/:id | integer | Get user's order |
| post /order-product | { "orderId": 2,"productId": 1}| Create order-product record |
|get /order-product/product/:id | integer | Get orders of a product |
| get /order-product/order/:id | integer | Get products of an order |
| get /order-product | | gets all order-product records |