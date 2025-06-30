import React from 'react'

interface EducationItem {
  institution: string
  period: string
  degree: string
  details: string[]
  logo: string
  logoAlt: string
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: 'University of Illinois Urbana-Champaign',
      period: '2024.9 - 2026.6 (Expected)',
      degree: 'M.S. in Computer Science',
      details: ['Advisor: Heng Ji'],
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo'
    },
    {
      institution: 'University of California Davis',
      period: '2023.3 - 2024.6',
      degree: 'Exchange student in Computer Science Department',
      details: [
        'Relevant Courses: Advanced Artificial Intelligence (graduate-level course, A+)',
        'Course Link: https://www.ifmlab.org/courses.html'
      ],
      logo: '/assets/ucd.png',
      logoAlt: 'UCD Logo'
    },
    {
      institution: 'B.E., Renmin University of China',
      period: '2020 - 2024',
      degree: 'Gaoling School of Artificial Intelligence',
      details: [
        'Advisor: Prof. Wayne Xin Zhao',
        'Cumulative GPA: 3.77/4.0 (Rank: 1/23); Junior Year GPA: 3.92/4.0'
      ],
      logo: '/assets/ruc.png',
      logoAlt: 'RUC Logo'
    }
  ]

  return (
    <div className="card">
      <h2 className="section-title">Education</h2>
      <div className="section-divider"></div>
      
      <div>
        {educationItems.map((item, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <h3 className="education-title">
                {item.institution}
              </h3>
              <p className="education-period">{item.period}</p>
              <p className="education-details">
                {item.degree.includes('http') ? (
                  <>
                    Exchange student in{' '}
                    <a 
                      href="https://cs.ucdavis.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Computer Science Department
                    </a>
                  </>
                ) : (
                  item.degree
                )}
              </p>
              {item.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="education-details">
                  {detail.includes('http') ? (
                    <>
                      Relevant Courses:{' '}
                      <a 
                        href="https://www.ifmlab.org/courses.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Advanced Artificial Intelligence
                      </a>{' '}
                      (graduate-level course, A+)
                    </>
                  ) : detail.includes('Advisor') ? (
                    <>
                      <strong>Advisor</strong>: {detail.includes('Wayne') ? (
                        <a 
                          href="https://scholar.google.com/citations?user=JNhNacoAAAAJ" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Prof. Wayne Xin Zhao
                        </a>
                      ) : (
                        detail.replace('Advisor: ', '')
                      )}
                    </>
                  ) : detail.includes('Gaoling') ? (
                    <>
                      <a 
                        href="http://ai.ruc.edu.cn/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Gaoling School of Artificial Intelligence
                      </a>
                    </>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </div>
            <img 
              src={item.logo} 
              alt={item.logoAlt} 
              className="institution-logo"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education 