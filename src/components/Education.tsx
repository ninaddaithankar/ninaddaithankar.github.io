import React from 'react'

interface EducationItem {
  institution: string
  period: string
  degree: string
  details: string[]
  logo: string
  logoAlt: string
  advisor?: string
  advisorUrl?: string
}

const Education: React.FC = () => {
  const educationItems: EducationItem[] = [
    {
      institution: 'University of Illinois Urbana-Champaign',
      period: '2024 - ongoing',
      degree: 'Masters - Computer Science, GPA - 3.91/4',
      details: ['Coursework: Advances in Cognitive Science, Deep Learning for Computer Vision, Natural Language Processing, Deep Generative Models, Advanced Information Retrieval, Computational Photography'],
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo',
      advisor: 'Prof. Heng Ji',
      advisorUrl: 'https://blender.cs.illinois.edu/hengji.html'
    },
    {
      institution: 'Savitribai Phule Pune University',
      period: '2017 - 2021',
      degree: 'Bachelors - Computer Science, GPA - 9.1/10',
      details: ['Coursework: Data Structures, Advanced Algorithms, Object Oriented Programming, Machine Learning, Web Development, Database Systems, High Performance Computing, Software Design'],
      logo: '/assets/sppu.png',
      logoAlt: 'SPPU Logo'
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
              <p className="education-details">{item.degree}</p>
              {item.advisor && item.advisor.trim() !== "" && (
                <p className="education-extra-details">
                  Advisor:{' '}
                  {item.advisorUrl ? (
                    <a href={item.advisorUrl} target="_blank" rel="noopener noreferrer">{item.advisor}</a>
                  ) : (
                    item.advisor
                  )}
                </p>
              )}
              {item.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="education-extra-details">{detail}</p>
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