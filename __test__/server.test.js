const request = require('supertest');
const app = require('../src/server/server');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the geo route', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/geo').send({ destination: 'Paris' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the wbit route', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/wbit').send({ lat: 48.8566, lon: 2.3522, start_date: '2020-05-01', end_date: '2020-05-03' });
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the photo route', () => {
    test('It should response the POST method', async () => {
        const response = await request(app).post('/photo').send({ location: 'Paris', isCloudy: 'cloudy' });
        expect(response.statusCode).toBe(200);
    });
});