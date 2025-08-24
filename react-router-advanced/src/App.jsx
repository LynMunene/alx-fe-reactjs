import React, { useState } from 'react'
import {  BrowserRouter,Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">React Router Advanced</h1>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/blog" className="nav-link">Blog</Link></li>
            <li><Link to="/profile" className="nav-link">Profile</Link></li>
            {isAuthenticated ? (
              <li>
                <button onClick={handleLogout} className="nav-button">Logout</button>
              </li>
            ) : (
              <li><Link to="/login" className="nav-link">Login</Link></li>
            )}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/profile" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App