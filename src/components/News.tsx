import React from 'react'

interface NewsItem {
  date: string
  content: React.ReactNode
}

const News: React.FC = () => {
  const items: NewsItem[] = [
    {
      date: 'Jun 2026',
      content: (
        <>
          My master's research is out!{' '}
          <a href="https://temporal-difference-vision.github.io/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace" }}>TDV</a>
          {' '}challenges the conventional wisdom in self-supervised vision — what if raw video was all the supervision you ever needed? [Under review at <strong>NeurIPS 2026</strong>]
        </>
      ),
    },
  ]

  return (
    <div className="card">
      <h2 className="blog-category" style={{ marginTop: 0 }}>News</h2>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              gap: '1.25rem',
              marginBottom: '0.85rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: '7rem',
                color: '#333536',
                fontWeight: 700,
                paddingTop: '0.05em',
              }}
            >
              {item.date}
            </span>
            <span style={{ color: '#374151', lineHeight: 1.6 }}>
              {item.content}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News
