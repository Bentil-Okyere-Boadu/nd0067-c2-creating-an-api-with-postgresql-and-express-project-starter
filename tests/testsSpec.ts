import { Users } from "../src/models/user_model";
import { app } from '../src/server';
import supertest from 'supertest';
import { Product, Products } from "../src/models/product_model";
import { Carts } from "../src/models/cart_model";
import { Orders } from "../src/models/order_model";


const request = supertest(app)
const products = new Products()
const users = new Users()
const cart = new Carts()
const orders = new Orders()



describe('User model tests', () => {
    let token = "Bearer "

    beforeAll(async () => {
        await users.create({ firstname: 'tom', lastname: 'kuku', password: 'password' })

        const response = await request.post('/login').send({ firstname: 'tom', password: 'password' })
        token = token + response.body.token
    })


    it('Checks if index is defined', () => {
        expect(users.index()).toBeDefined()
    })

    it('Creates a user', async () => {
        const data = {
            firstname: "ben",
            lastname: "kuku",
            password: "password"
        }
        const response = await request.post('/users').set('Authorization', token).send(data)
        expect(response.status).toBe(200)
    })

    it('gets all users', async () => {
        const response = await request.get('/users').set('Authorization', token)
        expect(response.status).toBe(200)
    })

    it('gets an user by ID', async () => {
        const response = await request.get('/users/1').set('Authorization', token)
        expect(response.status).toBe(200)
    })
})

describe('Product model tests', () => {
    let token = "Bearer "

    beforeAll(async () => {
        const response = await request.post('/login').send({ firstname: 'tom', password: 'password' })
        token = token + response.body.token
    })

    it('Checks if index is defined', () => {
        expect(products.index()).toBeDefined()
    })

    it('creates a product', async () => {
        const newProduct = await products.create({
            name: 'Strawberry lip gloss',
            price: 10,
            category: 'Lip gloss'
        })
        expect(newProduct).toEqual({
            id: newProduct.id,
            name: 'Strawberry lip gloss',
            price: 10,
            category: 'Lip gloss'
        })
    })

    it('View a product', async () => {
        const addedProduct: Product = await products.show(1)
        expect(addedProduct).toEqual({
            id: 1,
            name: 'Strawberry lip gloss',
            price: 10,
            category: 'Lip gloss'
        })
    })

    it('gets all products', async () => {
        const response = await request.get('/products')
        expect(response.status).toBe(200)
    })

    it('gets a product by ID', async () => {
        const response = await request.get('/products/1')
        expect(response.status).toBe(200)
    })

    it('Creates a product with endpoint', async () => {
        const data = {
            name: 'Black soap',
            price: 10,
            category: 'Soap'
        }
        const response = await request.post('/products').set('Authorization', token).send(data)
        expect(response.status).toBe(200)
    })
})

describe(`cart tests`, () => {
    let token = "Bearer "

    beforeAll(async () => {
        const response = await request.post('/login').send({ firstname: 'tom', password: 'password' })
        token = token + response.body.token
    })

    it(`Checks if the getAll() method exists for cart`, () => {
        expect(cart.getAll()).toBeDefined()
    })

    it(`Creates a new cart record`, async () => {
        const data = {
            quantity: 2,
            productId: 1,
        }
        const response = await request.post('/cart/1')
            .set('Authorization', token)
            .send(data)
        expect(response.statusCode).toBe(200)
    })

    it(`Gets all carts records`, async () => {
        const response = await request.get('/cart')
            .set('Authorization', token)
        expect(response.statusCode).toBe(200)
    })

    it(`Get all order with id=1 in cart`, async () => {
        const response = await request.get('/cart/order/1')
            .set('Authorization', token)
        expect(response.statusCode).toBe(200)
    })

})

describe('Order model tests', () => {
    let token = "Bearer "

    beforeAll(async () => {
        const response = await request.post('/login').send({ firstname: 'tom', password: 'password' })
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
