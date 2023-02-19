import { Orders } from "../src/models/order_model";
import { app } from '../src/server';
import supertest from 'supertest';

const request = supertest(app)
const orders = new Orders()

describe('Order model tests', () => {
    let token = "Bearer "
    
    beforeAll( async () => {
        const response = await request.post('/login').send({ firstname: 'tom', password: 'password'})
        token = token + response.body.token
    })

    it('Checks if index is defined', () => {
        expect(orders.index()).toBeDefined()
    })

    it('Creates a order', async () => {
        const data = {
            user_id: 1,
            status: "new"
        }
        const response = await request.post('/orders')
        .set('Authorization', token)
        .send(data)
        expect(response.status).toBe(200)
    })

    it('gets all orders', async () => {
        const response = await request.get('/orders')
        .set('Authorization', token)
        expect(response.status).toBe(200)
    })

    it('gets an order by ID', async () => {
        const response = await request.get('/orders/1')
        .set('Authorization', token)
        expect(response.status).toBe(200)
    })

    it('gets a users order', async () => {
        const response = await request.get('/orders/user/1')
        .set('Authorization', token)
        expect(response.status).toBe(200)
    })
})