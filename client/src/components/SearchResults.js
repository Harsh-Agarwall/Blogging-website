import React, { useState, useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
  const [posts, setPosts] = useState([]);
  const query = new URLSearchParams(useLocation().search);
  const tag = query.get('tag');

  useEffect(() => {
    const fetchPosts = async () => {
        try {
          console.log('Tag being searched:', tag); // Debug log
          const res = await axios.get(`http://localhost:5000/posts/search/${tag}`);
          setPosts(res.data);
        } catch (err) {
          console.error('Error fetching posts by tag:', err); // Debug log
          alert('Error fetching posts by tag');
        }
      };
      
    fetchPosts();
  }, [tag]);
  

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Posts with Tag: {tag}</h2>
      {posts.map((post) => (
        <div className="card mb-3 shadow-sm" key={post._id}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
