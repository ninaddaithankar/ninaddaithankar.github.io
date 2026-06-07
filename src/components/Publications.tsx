import React from 'react'

interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  year: string
  paperUrl: string
  bibtex: string
  posterUrl?: string
  websiteUrl?: string
  codeUrl?: string
}

const Publications: React.FC = () => {

  const publications: Publication[] = [
    {
      id: 'tdv2025',
      title: "You Don't Need Strong Assumptions: Visual Representation Learning via Temporal Differences",
      authors: 'Ninad Daithankar*, Alexi Gladstone*, Yann LeCun, Heng Ji',
      venue: 'NeurIPS 2026 (in review)',
      year: '2026',
      paperUrl: 'https://temporal-difference-vision.github.io/static/pdfs/tdv.pdf',
      posterUrl: '',
      bibtex: ``,
      websiteUrl: 'https://temporal-difference-vision.github.io/',
      codeUrl: 'https://github.com/ninaddaithankar/tdv'
    }
  ]

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
                        {pub.paperUrl && (
                          <a
                            href={pub.paperUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-link"
                          >
                            paper
                          </a>
                        )}
                        {pub.websiteUrl && (
                          <a
                            href={pub.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-link"
                          >
                            website
                          </a>
                        )}
                        {pub.codeUrl && (
                          <a
                            href={pub.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="publication-link"
                          >
                            code
                          </a>
                        )}
                      </div>
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