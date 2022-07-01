CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  status varchar(64),
  user_id integer REFERENCES users(id)
);