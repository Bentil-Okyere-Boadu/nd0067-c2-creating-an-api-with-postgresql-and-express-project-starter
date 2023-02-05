CREATE TABLE cart (
    product_id INTEGER REFERENCES products(id), 
    quantity INTEGER,     
    order_id INTEGER REFERENCES orders(id),
    CONSTRAINT orders_products_pkey PRIMARY KEY ( order_id, product_id)  
    );