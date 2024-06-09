import request from 'supertest';
import app from '../app';

describe('Astrologer API', () => {
    test('should create a new astrologer', async () => {
        const response = await request(app)
            .post('/astrologers')
            .send({ name: 'Astro1', isTopAstrologer: false });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Astro1');
    });

    test('should toggle top astrologer status', async () => {
        const response = await request(app)
            .post('/astrologers')
            .send({ name: 'Astro2', isTopAstrologer: false });
        const astrologerId = response.body._id;

        const toggleResponse = await request(app)
            .patch(`/astrologers/${astrologerId}/toggle-top`)
            .send();
        expect(toggleResponse.status).toBe(200);
        expect(toggleResponse.body.isTopAstrologer).toBe(true);
    });
});
