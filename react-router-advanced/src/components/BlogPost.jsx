import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BlogPost = () => {
  const { postId } = useParams()
  
  const blogPosts = {
    1: { title: 'Getting Started with React Router', content: 'Full content of post 1...' },
    2: { title: 'Advanced Routing Techniques', content: 'Full content of post 2...' },
    3: { title: 'Authentication in React Apps', content: 'Full content of post 3...' }
  }

  const post = blogPosts[postId]

  if (!post) {
    return (
      <div className="page-container">
        <h1>Post Not Found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Link to="/blog" className="back-link">← Back to Blog</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPost