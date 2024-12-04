import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Posts</h2>
      {posts.map((post) => (
        <div className="card mb-3 shadow-sm" key={post._id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <p className="text-muted">Author: {post.author.username}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
