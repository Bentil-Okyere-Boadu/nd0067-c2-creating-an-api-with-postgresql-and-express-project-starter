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

            return `Product was removed from cart successfully.`
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async updateQuantity(orderId: number, productId : number, quantity:number ){
        try {
            const pool =Client.connect()
            const sql = 'UPDATE cart SET quantity=$3 where order_id=$1 AND product_id=$2;'
            const results = (await pool).query(sql, [orderId, productId, quantity]);
            (await pool).release()

            return `Quantity updated successfully`
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async viewCart(orderId: number){
        try {
            const pool = Client.connect()
            const sql = 'SELECT user_id, order_id, name, price, category, quantity, status FROM "orders" JOIN "cart" ON "orders".id = "cart".order_id JOIN "products" ON "products".id = "cart".product_id WHERE "orders".id = $1;'
            const results = (await pool).query(sql, [orderId]);
            (await pool).release()

            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

}