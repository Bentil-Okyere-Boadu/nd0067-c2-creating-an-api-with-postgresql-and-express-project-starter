import Client from "../database";
import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv'

dotenv.config()
const { BCRYPT_PASSWORD, SALT } = process.env

export type User = {
    id?: number,
    firstname: string,
    lastname: string,
    password: string
}

export class Users {
    async index() {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM users;'
            const results = (await pool).query(sql);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            
        }
    }

    async show(id : number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM users WHERE id=$1 ;'
            const results = (await pool).query(sql, [id]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            
        }
    }

    async create({firstname, lastname, password}: User) {
        try {
            //@ts-ignore
            const hashedPassword =  bcrypt.hashSync(password+BCRYPT_PASSWORD, parseInt(SALT) )
            const pool = Client.connect()
            const sql = 'INSERT INTO users VALUES($1, $2, $3) RETURNING *;'
            const results = (await pool).query(sql, [firstname, lastname, hashedPassword]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }
}