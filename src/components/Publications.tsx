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
      id: 'qin2024does',
      title: 'Why Does New Knowledge Create Messy Ripple Effects in LLMs?',
      authors: 'Ninad Daithankar, Zixuan Zhang, Chi Han, Pengfei Yu, Manling Li, Heng Ji',
      venue: 'EMNLP 2024 Short',
      year: '2024',
      paperUrl: 'https://arxiv.org/pdf/2407.12828',
      posterUrl: '/assets/EMNLP24__RIPPLE_poster.pdf',
      bibtex: `@article{qin2024does,
  title={Why Does New Knowledge Create Messy Ripple Effects in LLMs?},
  author={Daithankar, Ninad and Zhang, Zixuan and Han, Chi and Li, Manling and Yu, Pengfei and Ji, Heng},
  journal={arXiv preprint arXiv:2407.12828},
  year={2024}
}`
    },
    {
      id: 'ze2023h',
      title: 'H-InDex: Visual Reinforcement Learning with Hand-Informed Representations for Dexterous Manipulation.',
      authors: 'Yanjie Ze, Yuyao Liu†, Ruizhe Shi†, Ninad Daithankar, Zhecheng Yuan, Jiashun Wang, Huazhe Xu',
      venue: 'NeurIPS 2023',
      year: '2023',
      paperUrl: 'https://web3.arxiv.org/pdf/2310.01404.pdf',
      bibtex: `@article{ze2023h,
  title={H-InDex: Visual Reinforcement Learning with Hand-Informed Representations for Dexterous Manipulation},
  author={Ze, Yanjie and Liu, Yuyao and Shi, Ruizhe and Daithankar, Ninad and Yuan, Zhecheng and Wang, Jiashun and Xu, Huazhe},
  journal={arXiv preprint arXiv:2310.01404},
  year={2023}
}`
    },
    {
      id: 'guo2023towards',
      title: 'Towards Effective Ancient Chinese Translation: Dataset, Model, and Evaluation.',
      authors: 'Geyang Guo, Jiarong Yang, Fengyuan Lu, Ninad Daithankar, Tianyi Tang, Wayne Xin Zhao',
      venue: 'NLPCC 2023',
      year: '2023',
      paperUrl: 'https://arxiv.org/pdf/2308.00240.pdf',
      bibtex: `@inproceedings{guo2023towards,
  title={Towards Effective Ancient Chinese Translation: Dataset, Model, and Evaluation},
  author={Guo, Geyang and Yang, Jiarong and Lu, Fengyuan and Daithankar, Ninad and Tang, Tianyi and Zhao, Wayne Xin},
  booktitle={CCF International Conference on Natural Language Processing and Chinese Computing},
  pages={416--427},
  year={2023},
  organization={Springer}
}`
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
      <h2 className="section-title">Publication</h2>
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
                        <a 
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
                          </a>
                        )}
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