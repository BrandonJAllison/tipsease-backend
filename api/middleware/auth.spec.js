const request = require('supertest');

const server = require('../server');

describe('server.js and its routes', () => {
  describe('quick sanity check of the GET endpoint /', () => {
    it('should respond with status code 200 OK', async () => {
      let response = await request(server).get('/');

      expect(response.status).toBe(200);
    });
    it('should give back a string@', async () => {
      let response = await request(server).get('/');

      expect(response.type).toMatch(/json/i);
    });
  });
});
