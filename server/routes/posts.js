const express = require('express');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const { userId } = jwt.verify(token, 'your_jwt_secret');
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

module.exports = router;
