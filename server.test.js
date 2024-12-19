const request = require('supertest');
const { app, server } = require('./server'); // Import the server for dynamic port usage

afterAll(() => {
  server.close(); // Clean up the server after tests
});

test('GET / responds with Hello, World!', async () => {
  const res = await request(app).get('/'); // Use the app directly without starting the server
  expect(res.text).toBe('Hello, World!');
});

