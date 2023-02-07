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
- user_id: number
- status of order (active or complete): string

#### Cart
- order_id: number
- product_id: number
- quantity: number

## Endpoints
| Endpoint      | params / body example |Description |
| -----------   | -----------   |----------- |
|[GET]  /            |                 |Displays 'Welcome to StoreFront API       |
| [POST] /login  | { 'firstname': 'tom', 'password': 'password'}|User login|
| [GET] /users  |      [token required]                                      |Get all Users |
| [GET] /users/:id  |  integer   [token required]                                   |Get specific user |
| [POST] /users  |   { 'firstname':"tom", 'lastname': "kuku",'password':"password"}                |Create user |
| [POST] /orders | {"user_id": 1,"status":"Complete"} [token required]| Create new order |
|[GET] /orders |[token required] | Get all orders |
|[GET] /orders/:id | integer [token required] | Get order by id|
| [GET] /products | | Get all products |
| [GET] /products/:id | integer | Get product by id |
| [POST] /products | {    "name": "Aloe Vera ultra soap","price": 20,      "category": "soap" } [token required]| Create new product |
|[GET] /orders/user/:id | integer [token required]| Get user's order |
| [POST] /cart/:userId | { "productId": 1, "quantity": 2} [token required]| Add product to cart of a new order |
| [POST] /cart/:userId | { "orderId": 2,"productId": 1, "quantity": 2} [token required]| Add to cart of an existing order |
| [GET] /cart/order/:id | integer [token required]| Get products of an order |
| [GET] /cart | | gets all cart records [token required]|
| [DELETE] /cart/:orderId/:productId | | Remove product from order cart [token required]|
| [PUT] /cart/:orderId/:productId | { "quantity": 4} | Change the quantity of a product in an order.[token required]|

Valid order statuses = "New", "Complete", "Failed", "In-process"
