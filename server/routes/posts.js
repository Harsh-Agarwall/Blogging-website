const express = require('express');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const { userId } = jwt.verify(token, 'b4d89a59d3f8ef12b2a60a6bc9f4e9b63fcbf8e2a84919f4653d2eac8edfe289');
    const post = new Post({ title, content, author: userId });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Error creating post' });
  }
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('author', 'username');
      res.json(post);
    } catch (err) {
      res.status(404).json({ error: 'Post not found' });
    }
  });
  

module.exports = router;
