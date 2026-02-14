const request = require('supertest');
const app = require('../../server');

describe('Auth route test', () => {
    it('should return 404 for unknown auth route', async () => {
        const res = await request(app).get('/api/auth/does-not-exist');
        expect(res.statusCode).toBe(404);
    });
});
