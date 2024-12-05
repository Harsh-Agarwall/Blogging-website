import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://blogging-website-9ia2.onrender.com/auth/login', { email, password });
      login(res.data.token); // Update context state
      localStorage.setItem('userId',res.data.userId)
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
