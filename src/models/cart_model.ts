import Client from "../database";
import dotenv from 'dotenv'

dotenv.config()

export type Cart = {
    productId: number,
    quantity: number,
    orderId: number
}

export class Carts {
    async getAll(): Promise<Cart[]> {
    try {
        const pool = Client.connect()
        const sql = 'SELECT * FROM cart;'
        const results = (await pool).query(sql);
        (await pool).release()
        
        return (await results).rows
    } catch (error) {
        throw new Error(`error: ${error}`);
    }
    }

    async getByProductId(productId: number): Promise<Cart[]> {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM cart WHERE product_id=$1;'
            const results = (await pool).query(sql, [productId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async getByOrderId(orderId: number): Promise<Cart[]> {
        try {
            const pool = Client.connect()
            const sql = 'SELECT * FROM cart WHERE order_id=$1;'
            const results = (await pool).query(sql, [orderId]);
            (await pool).release()
            
            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async addToCart({productId, quantity, orderId}: Cart): Promise<Cart> {
        try {
            const pool =Client.connect()
            const sql = 'INSERT INTO cart VALUES ($1, $2, $3) RETURNING *;'
            const results = (await pool).query(sql, [productId, quantity, orderId]);
            (await pool).release()

            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async removeFromCart(orderId: number, productId : number){
        try {
            const pool =Client.connect()
            const sql = 'DELETE FROM cart where order_id=$1 AND product_id=$2;'
            const results = (await pool).query(sql, [orderId, productId]);
            (await pool).release()

            console.log(results)
            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async viewCart(){
        
    }

}