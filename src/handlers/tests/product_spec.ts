import supertest from 'supertest';
import app from '../../server';


const request = supertest(app);

let token: string = '';

beforeAll(async () => {
    const user = await request
      .post('/users')
      .send({
        id: 2,
        firstname: 'John',
        lastname: 'Redderick',
        password: 'password123',
      })
      .set('Accept', 'application/json');
    token = user.body;
  });

describe('Test products endpoint responses', () => {
    it('GET /products endpoint', async () => {
        const response = await request.get('/products');
        expect(response.status).toBe(200);
    });

    it('POST /products endpoint', async () => {
        const response = await request
        .post('/products')
        .send({ id: 1, name: 'Chair', price: 75 })
        .set('authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
    });

    it('GET /products/:id endpoint', async () => {
        const response = await request
            .get('/products/1')
        expect(response.status)
        .toBe(200);
    });

    it('DELETE /products endpoint', async () => {
        const response = await request
                .delete('/products/1')
                .set('authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
    });

    afterAll(async () => {
        await request
          .delete('/users/2')
          .set('authorization', `Bearer ${token}`);
      });

});


