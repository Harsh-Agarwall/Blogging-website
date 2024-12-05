const mongoose = require('mongoose');
//post schema
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tags: [String], // Array of tags
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
