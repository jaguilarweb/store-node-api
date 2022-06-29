CREATE TABLE orders_products (
  id SERIAL PRIMARY KEY,
  quantity integer,
  order_id biginit REFERENCES orders(id),
  product_id biginit REFERENCES products(id)
);