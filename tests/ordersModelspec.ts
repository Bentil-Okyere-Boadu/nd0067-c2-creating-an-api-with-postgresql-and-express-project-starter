import { Orders } from "../src/models/order_model";
import { app } from '../src/server';
import supertest from 'supertest';

const request = supertest(app)
const orders = new Orders()

describe('Order model tests', () => {
    it('Checks if index is defined', () => {
        expect(orders.index()).toBeDefined()
    })

    it('Creates a order', async () => {
        const data = {
            product_id: 3,
            quantity: 2,
            user_id: 1,
            status: "completed"
        }
        const response = await request.post('/orders')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        .send(data)
        expect(response.status).toBe(200)
    })

    it('gets all orders', async () => {
        const response = await request.get('/orders')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        expect(response.status).toBe(200)
    })

    it('gets an order by ID', async () => {
        const response = await request.get('/orders/1')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        expect(response.status).toBe(200)
    })

    it('gets a users order', async () => {
        const response = await request.get('/orders/user/1')
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        expect(response.status).toBe(200)
    })
})