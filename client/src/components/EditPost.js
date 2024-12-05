import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
//to edit the post
function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://blogging-website-9ia2.onrender.com/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        alert('Error fetching post details');
      }
    };
    fetchPost();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.put(
        `http://localhost:5000/posts/${id}`,
        { title: post.title, content: post.content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Post updated successfully!');
      navigate('/my-posts');
    } catch (err) {
      alert('Error updating post');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h3 className="text-center mb-4">Edit Post</h3>
        <input
          type="text"
          className="form-control mb-3"
          value={post.title}
          placeholder="Post Title"
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="form-control mb-3"
          rows="5"
          value={post.content}
          placeholder="Edit your content..."
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        ></textarea>
        <button className="btn btn-success w-100" onClick={handleUpdate}>
          Update Post
        </button>
      </div>
    </div>
  );
}

export default EditPost;
