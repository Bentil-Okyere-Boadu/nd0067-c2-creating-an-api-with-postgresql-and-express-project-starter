import { Products } from "../src/models/product_model";
import { app } from '../src/server';
import supertest from 'supertest';

const request = supertest(app)
const products = new Products()

describe('Product model tests', () => {
    it('Checks if index is defined', () => {
        expect(products.index()).toBeDefined()
    })

    it('gets all products', async () => {
        const response = await request.get('/products')
        expect(response.status).toBe(200)
    })

    it('gets a product by ID', async () => {
        const response = await request.get('/products/1')
        expect(response.status).toBe(200)
    })

    it('Creates a product', async () => {
        const data = {
            name: 'Strawberry lip gloss',
            price: 10,
            category: 'Lip gloss'
        }
        const response = await request.post('/products').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U').send(data)
        expect(response.status).toBe(200)
    })

    it('Creates a product', async () => {
        const data = {
            name: 'Aloe Vera Liquid Soap',
            price: 40,
            category: 'Soap'
        }
        const response = await request.post('/products').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U').send(data)
        expect(response.status).toBe(200)
    })
})