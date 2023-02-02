# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. 
This document describes what endpoints the API supplies, as well as data shapes to meet the requirements of the application. 


## Data Shapes
#### Product
-  id: number
- name: string
- price: number
- [OPTIONAL] category: string

#### User
- id: number
- firstName: string
- lastName: string
- password: string

#### Orders
- id: number
- id of each product in the order: number
- quantity of each product in the order: number
- user_id: number
- status of order (active or complete): string

#### Orders_Products
- orderId: number
- productId: number

## Endpoints
| Endpoint      | params / body example |Description |
| -----------   | -----------   |----------- |
|[GET]  /            |                 |Displays 'Welcome to StoreFront API       |
| [POST] /login  | { 'firstname': 'tom', 'password': 'password'}|User login|
| [GET] /users  |      [token required]                                      |Get all Users |
| [GET] /users/:id  |  integer   [token required]                                   |Get specific user |
| [POST] /users  |   { 'firstname':"tom", 'lastname': "kuku",'password':"password"}                |Create user |
| [POST] /orders | {"product_id": 3,"quantity": 2,"user_id": 1,"status":"completed"} [token required]| create new order |
|[GET] /orders |[token required] | Get all orders |
|[GET] /orders/:id | integer [token required] | get order by id|
| [GET] /products | | Get all products |
| [GET] /products/:id | integer | get product by id |
| [POST] /products | {    "name": "Aloe Vera ultra soap","price": 20,      "category": "soap" } [token required]| create new product |
|[GET] /orders/user/:id | integer [token required]| Get user's order |
| [POST] /order-product | { "orderId": 2,"productId": 1} [token required]| Create order-product record |
|[GET] /order-product/product/:id | integer [token required]| Get orders of a product |
| [GET] /order-product/order/:id | integer [token required]| Get products of an order |
| [GET] /order-product | | gets all order-product records [token required]|
