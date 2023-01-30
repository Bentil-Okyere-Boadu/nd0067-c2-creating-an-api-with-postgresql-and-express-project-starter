import { OrdersProducts } from "../src/models/order_product_model";
import {app} from '../src/server'
import supertest from "supertest";

const request = supertest(app)
const order_product = new OrdersProducts

describe(`Order_Product tests`, () => {
    it(`Checks if the getAll() method exists for order_product`, () =>{
        expect(order_product.getAll()).toBeDefined()
    })

    it(`Creates a new order_product record`, async () => {
        const data = {
            orderId: 2,
            productId: 1
        }
       const response = await request.post('/order-product')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       .send(data)
       expect(response.statusCode).toBe(200)
    })

    it(`Gets all order_products`, async () => {
       const response = await request.get('/order-product')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       expect(response.statusCode).toBe(200)
    })

    it(`Get all order_product of order with id=2`, async () => {
       const response = await request.get('/order-product/order/2')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       expect(response.statusCode).toBe(200)
    })

    it(`Get all order_product of order with id=2`, async () => {
       const response = await request.get('/order-product/product/3')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       expect(response.statusCode).toBe(200)
    })
})