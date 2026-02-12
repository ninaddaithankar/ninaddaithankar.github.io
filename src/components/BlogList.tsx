import React from 'react'
import { Link } from 'react-router-dom'
import { blogs, categories, type Blog, type CategoryKey } from '../data/blogs'
import Footer from './Footer'

const BlogList: React.FC = () => {
  const visibleBlogs = blogs.filter((blog) => blog.visible)
  // Group blogs by category
  const blogsByCategory = visibleBlogs.reduce((acc, blog) => {
    if (!acc[blog.category]) {
      acc[blog.category] = []
    }
    acc[blog.category].push(blog)
    return acc
  }, {} as Record<CategoryKey, Blog[]>)

  // Define the order of sections
  const categoryOrder: CategoryKey[] = ['ai', 'experiences', 'recommendations']

  return (
    <div style={{ paddingBottom: '3rem' }}>
      <Link to="/" className="back-link">&larr; Back to Home</Link>
      <h2 className="section-title" style={{marginTop: '4rem'}}>my thoughts</h2>
      <div className="section-divider" style={{marginBottom: '2rem'}}/>
      
      {categoryOrder.map(categoryKey => {
        const category = categories[categoryKey]
        const categoryBlogs = blogsByCategory[categoryKey] || []
        
        return (
          <div key={categoryKey} style={{marginBottom: '3rem'}}>
            <h3 className="blog-category">
              {category.label}
            </h3>
            {categoryBlogs.length > 0 ? (
              categoryBlogs.map(blog => (
                <div className="card" key={blog.id}>
                  <Link to={`/blog/${blog.id}`} className="publication-title" style={{fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem'}}>{blog.title}</Link>
                  <div className="blog-date" style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem'}}>{blog.date}</div>
                  <div className="text-content">{blog.summary}</div>
                </div>
              ))
            ) : (
              <div className="text-content" style={{color: '#9ca3af', fontStyle: 'italic'}}>
                Coming soon...
              </div>
            )}
          </div>
        )
      })}

      <div style={{ marginTop: '4rem' }}>
        <Footer />
      </div>
    </div>
  )
}

export default BlogList 