const request = require('supertest');
const app = require('./app');

describe('API Endpoints', () => {
  describe('GET /', () => {
    it('responds with welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ message: 'Welcome to the GitHub Actions Demo API' });
    });
  });

  describe('GET /health', () => {
    it('responds with health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'healthy');
      expect(response.body).toHaveProperty('timestamp');
    });
  });
});
