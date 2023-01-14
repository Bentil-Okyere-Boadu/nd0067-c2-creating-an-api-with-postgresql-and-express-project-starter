import Client from "../database";

export type Product = {
    id?: number,
    name: string,
    price: number,
    category? : string
}

export class Products {
    async index(): Promise<Product[]> {
        try {    
            const connection = Client.connect()
            const sql = 'SELECT * FROM products;'
            const results = (await connection).query(sql);
            (await connection).release()
    
            return (await results).rows
        } catch (error) {
            throw new Error(`error: ${error}`);
        }

    }

    async show(id: number) : Promise<Product> {
        try {
            const connection = Client.connect()
            const sql = 'SELECT FROM products WHERE id=$1;'
            const results = (await connection).query(sql, [id]);
            (await connection).release()
    
            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }

    async create ({name, price, category} : Product) {
        try {
            const connection = Client.connect()
            const sql = 'INSERT INTO products VALUES($1, $2, $3) RETURNING *;'
            const results = (await connection).query(sql, [name, price, category]);
            (await connection).release()
    
            return (await results).rows[0]
        } catch (error) {
            throw new Error(`error: ${error}`);
        }
    }
}