// jshint esversion:6
// jshint linter enabled in Visual Studio Code


const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json());

// store your comments in the following array
const commentsByPostId = {};

//route to get comments and id
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// route to post comments, create id
app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const { content } = req.body;

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content });

  commentsByPostId[req.params.id] = comments;

  //send back 201-created
  res.status(201).send(comments);
});

// listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});
