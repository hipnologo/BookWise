// Importing modules
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3001;

app.get('/isbn/:isbn', async (req, res) => {
  const { isbn } = req.params;
  const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`);
  const data = await response.json();
  res.send(data);
});

app.get('/title/:title', async (req, res) => {
  const { title } = req.params;
  const response = await fetch(`http://openlibrary.org/search.json?title=${title}`);
  const data = await response.json();
  res.send(data.docs[0]); // Return the first result
});

app.get('/author/:author', async (req, res) => {
  const { author } = req.params;
  const response = await fetch(`http://openlibrary.org/search.json?author=${author}`);
  const data = await response.json();
  res.send(data.docs); // Return all books by the author
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
