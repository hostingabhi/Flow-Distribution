import request from 'supertest';
import app from '../app';

describe('Distribution API', () => {
    test('should distribute user to an astrologer', async () => {
        await request(app)
            .post('/astrologers')
            .send({ name: 'Astro1', isTopAstrologer: false });

        const response = await request(app)
            .post('/users/distribute')
            .send({ name: 'User1' });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('User1');
    });
});
