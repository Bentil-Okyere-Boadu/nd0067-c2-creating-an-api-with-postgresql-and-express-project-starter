import Client from "../database";
import dotenv from 'dotenv'

dotenv.config()

export type Order = {
    product_id : number,
    quantity: number,
    user_id : number,
    status: string,
    id?: number
}

export class Orders {
    async index () {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders;'
            const results = (await pool).query(sql);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async show(id : number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders WHERE id=$1 ;'
            const results = (await pool).query(sql, [id]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async create({product_id, quantity, user_id, status}: Order) {
        try {
            //@ts-ignore
            const pool = Client.connect()
            const sql = 'INSERT INTO orders VALUES($1, $2, $3, $4) RETURNING *;'
            const results = (await pool).query(sql, [product_id, quantity, user_id, status]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async userOrder(id: number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders WHERE user_id=$1;'
            const results = (await pool).query(sql, [id]);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }
}