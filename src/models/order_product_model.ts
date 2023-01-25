import Client from "../database";
import dotenv from 'dotenv'

dotenv.config()

export class OrdersProducts {
    async getAll() {
    try {
        const pool = Client.connect()
        const sql = 'SELECT * FROM orders_products;'
        const results = (await pool).query(sql);
        (await pool).release()
        
        return (await results).rows
    } catch (error) {
        
    }
    }

    async getByProductId(productId: number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders_products WHERE product_id=$1;'
            const results = (await pool).query(sql, [productId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            
        }
    }

    async getByOrderId(orderId: number) {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM orders_products WHERE order_id=$1;'
            const results = (await pool).query(sql, [orderId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            
        }
    }
}