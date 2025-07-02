import React from 'react'
import { Link } from 'react-router-dom'

const blogs = [
  {
    id: 'how-running-changed-me',
    title: 'How Running Changed Me',
    summary: '(still a work in progress) A personal story of why I chose running over weightlifting, why I think it is harder, and how it has changed my thought process.'  },
]

const BlogList: React.FC = () => {
  return (
    <div>
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <h2 className="section-title" style={{marginTop: '4rem'}}>my thoughts</h2>
      <div className="section-divider" style={{marginBottom: '2rem'}}/>
      {blogs.map(blog => (
        <div className="card" key={blog.id}>
          <Link to={`/blog/${blog.id}`} className="publication-title" style={{fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem'}}>{blog.title}</Link>
          <div className="text-content">{blog.summary}</div>
        </div>
      ))}
    </div>
  )
}

export default BlogList 