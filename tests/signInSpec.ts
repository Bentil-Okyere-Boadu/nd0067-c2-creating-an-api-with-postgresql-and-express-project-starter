import supertest from "supertest";
import { app } from "../src/server";

const request = supertest(app)

describe(`User sign in test`, () => {
    it('checks if user successfully signs in', async () => {
        const response = await request.post('/login').send({ firstname: 'tom', password: 'password'})
        expect(response.status).toBe(200)
    })
})

