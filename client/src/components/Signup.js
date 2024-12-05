import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await axios.post('https://blogging-website-9ia2.onrender.com/auth/signup', { username,email, password });
      alert('Signup successful!');
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Signup</h3>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button className="btn btn-success w-100" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;
