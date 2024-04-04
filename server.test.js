import server from './server'; 
import supertest from 'supertest';

const request = supertest(server);

afterAll((done) => {
  server.close(done);
});

describe('BookWise API Tests', () => {
  it('GET /isbn/:isbn - success', async () => {
    // Mock a valid ISBN for testing purposes
    const isbn = '0451526538';
    const response = await request.get(`/isbn/${isbn}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('title');
  });

  it('GET /title/:title - success', async () => {
    const title = 'The Great Gatsby';
    const response = await request.get(`/title/${title}`);
    expect(response.status).toBe(200);
    // Check for a property common in book data, like 'title'
    expect(response.body).toHaveProperty('title');
  });

  it('GET /author/:author - success', async () => {
    const author = 'F. Scott Fitzgerald';
    const response = await request.get(`/author/${author}`);
    expect(response.status).toBe(200);
    // Ensure the response is an array (list of books)
    expect(Array.isArray(response.body)).toBe(true);
  });
});
