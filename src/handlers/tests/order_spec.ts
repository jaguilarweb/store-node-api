import supertest from 'supertest';
import app from '../../server';


const request = supertest(app);

let token: string = '';

beforeAll(async () => {
    const user = await request
      .post('/users')
      .send({
        id: 1,
        firstname: 'Peter',
        lastname: 'Maverick',
        password: 'password123',
      })
      .set('Accept', 'application/json');
    token = user.body;
  });

describe('Test orders endpoint responses', () => {
    it('GET /orders endpoint', async () => {
        const response = await request
        .get('/orders')
        .set('authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
    });

    it('POST /orders endpoint', async () => {
        const response = await request
        .post('/orders')
        .send({
          status: "Active",
          user_id: 1
      })
        .set('authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
    });

    it('GET /orders/:id endpoint', async () => {
        const response = await request
            .get('/orders/1')
            .set('authorization', `Bearer ${token}`)
        expect(response.status)
        .toBe(200);
    });

    it('DELETE /orders endpoint', async () => {
        const response = await request
                .delete('/orders/1')
                .set('authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
    });

    afterAll(async () => {
        await request
        .delete('/users/1')
        .set('authorization', `Bearer ${token}`);
      });

});