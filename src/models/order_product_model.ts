import Client from "../database";
import dotenv from 'dotenv'

dotenv.config()

export type Order_Product = {
    productId: number,
    orderId: number
}

export class OrdersProducts {
    async getAll(): Promise<Order_Product[]> {
    try {
        const pool = Client.connect()
        const sql = 'SELECT * FROM orders_products;'
        const results = (await pool).query(sql);
        (await pool).release()
        
        return (await results).rows
    } catch (error) {
        throw new Error(`error: ${error}`);
    }
    }

    async getByProductId(productId: number): Promise<Order_Product[]> {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders_products WHERE product_id=$1;'
            const results = (await pool).query(sql, [productId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async getByOrderId(orderId: number): Promise<Order_Product[]> {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders_products WHERE order_id=$1;'
            const results = (await pool).query(sql, [orderId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async createOrderProduct({productId, orderId}: Order_Product): Promise<Order_Product> {
        try {
            const pool =Client.connect()
            const sql = 'INSERT INTO orders_products VALUES ($1, $2) RETURNING *;'
            const results = (await pool).query(sql, [productId, orderId]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }
}