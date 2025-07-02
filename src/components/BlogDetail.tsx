import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const blogMeta = [
  {
    id: 'how-running-changed-me',
    title: 'How Running Changed Me',
  },
]

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const meta = blogMeta.find(b => b.id === id)

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

  if (!meta) return <div className="text-content">Blog not found.</div>

  return (
    <div>
      <Link to="/blog" className="back-link">&larr; Back to Blog</Link>
      <h2 className="section-title" style={{marginTop: '4rem'}}>{meta.title}</h2>
      <div className="section-divider" style={{marginBottom: '2rem'}}/>
      <div className="text-content" style={{marginTop: '1.5rem'}}>
        {loading && 'Loading...'}
        {error && error}
        {!loading && !error && <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>}
      </div>
    </div>
  )
}

export default BlogDetail 