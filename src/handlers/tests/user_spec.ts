import supertest from 'supertest';
import app from '../../server';


const request = supertest(app);

let token: string = '';


describe('Test users endpoint responses', () => {

  it('POST /users endpoint', async () => {
      const response = await request
      .post('/users')
      .send({
        id: 3,
        firstname: 'Pete',
        lastname: 'Redderick',
        password: 'password123',
      })
      .set('authorization', `Bearer ${token}`)
      token = response.body;
      expect(response.status).toBe(200);
  });

  it('GET /users endpoint', async () => {
    const response = await request
    .get('/users')
    .set('authorization', `Bearer ${token}`);
    expect(response.status).toBe(200);
});

    it('GET /users/:id endpoint', async () => {
        const response = await request
            .get('/users/3')
            .set('authorization', `Bearer ${token}`)
        expect(response.status)
        .toBe(200);
    });

    it('DELETE /users endpoint', async () => {
        const response = await request
                .delete('/users/3')
                .set('authorization', `Bearer ${token}`)
        expect(response.status)
          .toBe(200);
    });

});