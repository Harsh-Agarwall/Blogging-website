import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      <h2 className="text-center mb-4">All Blogs</h2>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content.substring(0, 100)}...</p>
                <Link to={`/post/${post._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
