import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-post" element={
                   <ProtectedRoute><CreatePost /></ProtectedRoute>} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
