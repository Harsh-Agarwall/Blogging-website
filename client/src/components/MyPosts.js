import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchMyPosts = async () => {
      const userId = localStorage.getItem('userId'); // Store `userId` during login/signup
      try {
        const res = await axios.get(`https://blogging-website-9ia2.onrender.com/posts/user/${userId}`);
        setPosts(res.data);
      } catch (err) {
        alert('Error fetching your posts');
      }
    };
    fetchMyPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Posts</h2>
      {posts.map((post) => (
        <div className="card mb-3 shadow-sm" key={post._id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content.substring(0, 100)}...</p>
            <Link to={`/edit-post/${post._id}`} className="btn btn-warning">
              Edit
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPosts;
