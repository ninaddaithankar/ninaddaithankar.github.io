import React, { useState } from 'react'

interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: string
  paperUrl: string
  bibtex: string
  posterUrl?: string
}

const Publications: React.FC = () => {
  const [expandedBib, setExpandedBib] = useState<string | null>(null)

  const publications: Publication[] = [
    {
      id: 'tdv2025',
      title: 'Is there an Optimal Set of Assumptions for Training Visual Encoders?',
      authors: '[Manuscript in Preparation] Ninad Daithankar†, Alexi Gladstone†, Heng Ji',
      venue: 'ICML 2026',
      year: '2025',
      paperUrl: '',
      posterUrl: '',
      bibtex: ``
    }
  ]

  const toggleBib = (id: string) => {
    setExpandedBib(expandedBib === id ? null : id)
  }

  const groupedPublications = publications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = []
    }
    acc[pub.year].push(pub)
    return acc
  }, {} as Record<string, Publication[]>)

  return (
    <div className="card">
      <h2 className="section-title">Publications</h2>
      <div className="section-divider"></div>
      
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
        † denotes equal contribution
      </p>
      
      <div>
        {Object.entries(groupedPublications)
          .sort(([a], [b]) => b.localeCompare(a))
          .map(([year, pubs]) => (
            <div key={year}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#111827', marginBottom: '1rem' }}>
                {year}
              </h3>
              <div>
                {pubs.map((pub) => (
                  <div key={pub.id} className="publication">
                    <div>
                      <h4 className="publication-title">{pub.title}</h4>
                      <p className="publication-authors">{pub.authors}</p>
                      <div className="publication-links">
                        <span className="publication-badge">{pub.venue}</span>
                        {/* <a 
                          href={pub.paperUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="publication-link"
                        >
                          paper
                        </a>
                        <button
                          onClick={() => toggleBib(pub.id)}
                          className="publication-link"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                        >
                          bib
                        </button>
                        {pub.posterUrl && (
                          <a 
                            href={pub.posterUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="publication-link"
                          >
                            poster
                          </a> */}
                        {/* )} */}
                      </div>
                      
                      {expandedBib === pub.id && (
                        <div className="bibtex">
                          {pub.bibtex}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Publications 