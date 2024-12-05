import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import BlogDetail from './components/BlogDetail';
import MyPosts from './components/MyPosts';
import EditPost from './components/EditPost';
import SearchResults from './components/SearchResults';

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
      <Route path="/post/:id" element={
        <ProtectedRoute><BlogDetail /></ProtectedRoute>} />
        <Route path="/my-posts" element={
          <ProtectedRoute><MyPosts /></ProtectedRoute>} />
        <Route path="/edit-post/:id" element={
          <ProtectedRoute><EditPost /></ProtectedRoute>} />
          <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
