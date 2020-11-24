// jshint esversion:6


import express from 'express';
import { json } from 'body-parser';
import { randomBytes } from 'crypto';

const app = express();
app.use(json());

// store your posts in the following array
const posts = {};

// route to GET posts
app.get('/posts', (req, res) => {
  res.send(posts);
});

// route to save new post
app.post('/posts', (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

// send back 201-created
  res.status(201).send(posts[id]);
});

// listen on port 4000
app.listen(4000, () => {
  console.log('Listening on port 4000');
});
