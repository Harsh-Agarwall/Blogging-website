import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const navigate = useNavigate();
  

  
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
  },[])
  const createPost = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    try {
      await axios.post(
        'http://localhost:5000/posts',
        {
          title,
          content,
          tags: tags.split(',').map((tag) => tag.trim()), // Split tags by commas
          author: userId,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Post created successfully!');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center mb-4">Create a New Post</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Post Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          rows="5"
          placeholder="Write your content here..."
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
           <input
          type="text"
          className="form-control mb-3"
          placeholder="Tags (comma-separated)"
          onChange={(e) => setTags(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
