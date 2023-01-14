CREATE TABLE orders (
    product_id INTEGER REFERENCES products(id), 
    quantity INTEGER, 
    user_id INTEGER REFERENCES users(id), 
    status VARCHAR(20), 
    id SERIAL PRIMARY KEY);