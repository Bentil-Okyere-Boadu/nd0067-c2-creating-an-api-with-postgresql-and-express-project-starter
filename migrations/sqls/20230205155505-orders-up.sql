CREATE TABLE orders (
    user_id INTEGER REFERENCES users(id), 
    status VARCHAR(20), 
    id SERIAL PRIMARY KEY
    );