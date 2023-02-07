import Client from "../database";
import dotenv from 'dotenv'
import { Order_Status } from "../utils/orderStatus";

dotenv.config()

export type Order = {
    user_id : number,
    status: Order_Status,
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

    async create({user_id, status}: Order) {
        try {
            //@ts-ignore
            const pool = Client.connect()
            const sql = 'INSERT INTO orders VALUES($1, $2) RETURNING *;'
            const results = (await pool).query(sql, [user_id, status]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async userOrder(id: number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT user_id, order_id, name, price, category, quantity, status FROM "orders" JOIN cart ON "orders".id = "cart".order_id JOIN "products" ON "products".id = "cart".product_id WHERE "orders".user_id=$1;'
            const results = (await pool).query(sql, [id]);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async updateStatus(status: Order_Status, id: number){
        try {
            const pool = Client.connect()
            const sql = 'UPDATE orders SET status=$1 WHERE id=$2'
            const results = (await pool).query(sql, [status, id]);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }
}