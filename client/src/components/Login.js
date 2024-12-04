import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
 useEffect(()=>{
  if(localStorage.getItem("token")){
    navigate('/')
  }
},[])

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert('Login successful!');
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Login</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
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
