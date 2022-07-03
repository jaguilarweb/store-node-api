import Client from '../database';
import bcrypt from 'bcrypt';

export type User = {
  id?: number;
  firstname: string;
  lastname:string;
  password: string;
}

const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS!;

export class UserStore {
  async index(): Promise<User[]> {
    try {
      //@ts-ignore
      const conn = await Client.connect();
      const sql = 'SELECT * FROM users';
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (error) {
      throw new Error(`Could not get users. Error: ${error}`)
    }
  }

  async show(id: string): Promise<User> {
    try {
      const sql = 'SELECT * FROM users WHERE id=($1)';
      //@ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();
      return result.rows[0];
    } catch (error){
      throw new Error(`Could not find user ${id}. Error: ${error}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = 'INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *';

      const hash = bcrypt.hashSync(
        u.password + pepper, 
        parseInt(saltRounds)
      );

      const result = await conn
          .query(sql, [u.firstname, u.lastname, hash]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
        throw new Error(`Could not add new user ${u.firstname}. Error: ${error}`);
    }
  }


  async authenticate(lastname: string, password: string): Promise<User | null> {

    const sql = 'SELECT password FROM users WHERE lastname=($1)'
    const conn = await Client.connect()
    const result = await conn.query(sql, [lastname])
    //console.log(password+pepper)

    if(result.rows.length) {
      const user = result.rows[0];

      if (bcrypt.compareSync(password+pepper, user.password)) {
        return user
      }
    }
    return null
  }

  async edit(u: User): Promise<User> {
    console.log('user: ' + u.lastname)
    try {
      const sql = 'UPDATE users SET password=($1) WHERE id=($2) RETURNING *';
      //@ts-ignore
      const conn = await Client.connect();
      const hash = bcrypt.hashSync(
        u.password + pepper, 
        parseInt(saltRounds)
        );
        
      const result = await conn.query(sql, [hash, u.id]);
      conn.release();
      return result.rows[0];
    } catch (error){
      throw new Error(`Could not find user. Error: ${error}`);
    }
  }




  async delete(id: string): Promise<User> {
    try {
      const sql = 'DELETE FROM users WHERE id=($1)';
      // @ts-ignore
      const conn = await Client.connect();
      const result = await conn.query(sql, [id]);
      const user = result.rows[0];
      conn.release();
      return user;
    } catch (error) {
      throw new Error(`Could not delete user ${id}. Error ${error}`);
    }
  }


}