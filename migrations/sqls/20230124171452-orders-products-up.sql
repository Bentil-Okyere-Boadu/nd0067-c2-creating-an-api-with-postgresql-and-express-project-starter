CREATE TABLE orders_products (product_id INTEGER REFERENCES products(id),    order_id INTEGER REFERENCES orders(id) );