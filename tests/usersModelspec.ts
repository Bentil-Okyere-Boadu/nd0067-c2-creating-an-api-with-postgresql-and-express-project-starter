import { Users } from "../src/models/user_model";
import { app } from '../src/server';
import supertest from 'supertest';

const request = supertest(app)
const users = new Users()

describe('User model tests', () => {
    it('Checks if index is defined', () => {
        expect(users.index()).toBeDefined()
    })

    it('Creates a user', async () => {
        const data = {
            firstname: "tom",
            lastname: "kuku",
            password: "password"
        }
        const response = await request.post('/users').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U').send(data)
        expect(response.status).toBe(200)
    })

    it('gets all users', async () => {
        const response = await request.get('/users').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        expect(response.status).toBe(200)
    })

    it('gets an user by ID', async () => {
        const response = await request.get('/users/1').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzM5NjUxNDd9.dZox71Z3bhpuqAKrnVc2pyFAVVmsLkvYososEf-Yg2U')
        expect(response.status).toBe(200)
    })
})
