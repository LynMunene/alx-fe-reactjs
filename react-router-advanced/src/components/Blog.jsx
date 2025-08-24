import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Getting Started with React Router', excerpt: 'Learn the basics...' },
    { id: 2, title: 'Advanced Routing Techniques', excerpt: 'Dive deeper into...' },
    { id: 3, title: 'Authentication in React Apps', excerpt: 'Secure your routes...' }
  ]

  return (
    <div className="page-container">
      <h1>Blog Posts</h1>
      <div className="blog-list">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog