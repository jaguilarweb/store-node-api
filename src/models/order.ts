import Client from '../database';

export type Order = {
  id?: number;
  status: string;
  user_id: number;
}

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not get orders. Error: ${error}`)
    }
  }

  async show(id: string): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE id=($1)';
      //@ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error){
      throw new Error(`Could not find order ${id}. Error: ${error}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      const sql = 'INSERT INTO orders (status, user_id) VALUES($1, $2) RETURNING *';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn
          .query(sql, [o.status, o.user_id]);
      const order = result.rows[0];
      conn.release()
      return order;
    } catch (error) {
        throw new Error(`Could not add new order. Error: ${error}`);
    }
  }

  async addProduct(quantity: number, orderId: string, productId: string): Promise<Order> {
    try {
      const sql = 'INSERT INTO orders_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn
        .query(sql, [quantity, orderId, productId])

      const order = result.rows[0]
      conn.release()
      return order
    } catch (error) {
      throw new Error(`Could not add product ${productId} to order ${orderId}: ${error}`)
    }
  }


  async delete(id: string): Promise<Order> {
    try {
      const sql = 'DELETE FROM orders WHERE id=($1)';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      const order = result.rows[0];
      conn.release();
      return order;
    } catch (error) {
      throw new Error(`Could not delete order ${id}. Error ${error}`);
    }
  }

}