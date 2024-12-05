const express = require('express');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const router = express.Router();
//to save the post
router.post('/', async (req, res) => {
  try {
    const { title, content ,tags} = req.body;
    const token = req.headers.authorization.split(' ')[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    const formattedTags = Array.isArray(tags)
    ? tags
    : tags?.split(',').map((tag) => tag.trim()).filter((tag) => tag) || [];
    const post = new Post({
      title,
      content,
      tags: formattedTags,
      author: userId,
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Error creating post' });
  }
});
//to get the post

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});
//get post by id
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate('author', 'username');
      res.json(post);
    } catch (err) {
      res.status(404).json({ error: 'Post not found' });
    }
  });
  //get post by user id
  router.get('/user/:userId', async (req, res) => {
    console.log('Request body:', req.body);
    console.log('Request params:', req.params);
  
    try {
      const posts = await Post.find({ author: req.params.userId });
      res.json(posts);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching user posts' });
    }
  });
  router.put('/:id', async (req, res) => {
    console.log('Request body:', req.body);
    console.log('Request params:', req.params);
  
    try {
      const { id } = req.params;
      const { title, content } = req.body;
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      res.json(updatedPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error updating post' });
    }
  });
  //search api
  router.get('/search/:tag', async (req, res) => {
    const { tag } = req.params; // Extract `tag` from query parameters
  
    if (!tag) {
      return res.status(400).json({ error: 'Tag query parameter is required' });
    }
  
    try {
      // Search for posts where `tags` array contains the specified tag
      const posts = await Post.find({ tags: { $in: [tag]} });
      if (posts.length === 0) {
        return res.status(404).json({ message: 'No posts found with the given tag' });
      }
      res.status(200).json(posts); // Send found posts as response
    } catch (err) {
      console.error('Error fetching posts by tag:', err);
      res.status(500).json({ error: 'Server error while fetching posts' });
    }
  });
  
  
    
  

module.exports = router;
