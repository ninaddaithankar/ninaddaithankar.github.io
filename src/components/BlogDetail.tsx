import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { blogs } from '../data/blogs'
import Footer from './Footer'

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const blog = id ? blogs.find(b => b.id === id) : null

  useEffect(() => {
    if (!id) return
    setLoading(true)
    fetch(`assets/blogs/${id}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Not found')
        return res.text()
      })
      .then(text => {
        setContent(text)
        setLoading(false)
      })
      .catch(() => {
        setError('Blog not found.')
        setLoading(false)
      })
  }, [id])

  if (!blog) return <div className="text-content">Blog not found.</div>

  return (
    <div style={{ paddingBottom: '3rem' }}>
      <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
      <h2 className="section-title" style={{marginTop: '4rem'}}>{blog.title}</h2>
      <div className="blog-date" style={{fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem'}}>{blog.date}</div>
      <div className="section-divider" style={{marginBottom: '2rem'}}/>
      <div className="text-content blog-content" style={{marginTop: '1.5rem'}}>
        {loading && 'Loading...'}
        {error && error}
        {!loading && !error && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <Footer />
      </div>
    </div>
  )
}

export default BlogDetail 