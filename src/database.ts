import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config()

const {
    POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_TEST_DB, ENV, POSTGRES_PORT
} = process.env

const port : number = POSTGRES_PORT? parseInt(POSTGRES_PORT) : 5432;

const client = new Pool({
    host: POSTGRES_HOST,
    database: ENV === 'test'? POSTGRES_TEST_DB :  POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: port
})

export default client;