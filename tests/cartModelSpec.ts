import { Carts } from "../src/models/cart_model";
import {app} from '../src/server'
import supertest from "supertest";

const request = supertest(app)
const cart = new Carts

describe(`cart tests`, () => {
   
    it(`Checks if the getAll() method exists for cart`, () =>{
        expect(cart.getAll()).toBeDefined()
    })

    it(`Creates a new cart record`, async () => {
        const data = {
            quantity: 2,
            productId: 1,
        }
       const response = await request.post('/cart/1')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       .send(data)
       expect(response.statusCode).toBe(200)
    })

    it(`Gets all carts records`, async () => {
       const response = await request.get('/cart')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       expect(response.statusCode).toBe(200)
    })

    it(`Get all order with id=1 in cart`, async () => {
       const response = await request.get('/cart/order/1')
       .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
       expect(response.statusCode).toBe(200)
    })

})