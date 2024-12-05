// this is the page which show detail of blog
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BlogDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        alert('Error fetching post details');
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h2 className="card-title text-center">{post.title}</h2>
          <p className="text-muted text-center">Author: {post.author.username}</p>
          <hr />
          <p className="card-text">{post.content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
