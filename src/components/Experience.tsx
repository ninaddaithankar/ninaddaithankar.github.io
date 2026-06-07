import React from 'react'

interface Advisor {
  name: string
  url?: string
}

interface ExperienceItem {
  title: string
  institution: string
  period: string
  advisors?: Advisor[]
  topic: string
  logo: string
  logoAlt: string
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: 'Researcher - Video Understanding',
      institution: 'Blender Lab - University of Illinois Urbana-Champaign',
      period: '09/2024 - 12/2025',
      advisors: [
        { name: 'Alexi Gladstone', url: 'https://alexiglad.github.io' },
        { name: 'Prof. Heng Ji', url: 'https://blender.cs.illinois.edu/hengji.html' },
      ],
      topic: 'Temporal Difference Encoders',
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo'
    },
    {
      title: 'Software Engineer - Data Virtualization',
      institution: 'eQ Technologic',
      period: '08/2021 - 07/2024',
      topic: '',
      logo: '/assets/eq-logo.webp',
      logoAlt: 'eQ Logo'
    }
  ]

  return (
    <div className="card">
      <h2 className="section-title">Experience</h2>
      <div className="section-divider"></div>
      
      <div>
        {experienceItems.map((item, index) => (
          <div key={index} className="experience-item">
            <div className="experience-content">
              <h3 className="experience-title">
                {item.title}
              </h3>
              <p className='experience-period'>{item.institution}</p>
              <p className="experience-period">{item.period}</p>
              {item.advisors && item.advisors.length > 0 && (
                <p className="education-extra-details">
                  Advisors:{' '}
                  {item.advisors.map((a, i) => (
                    <span key={a.name}>
                      {a.url ? (
                        <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem' }}>
                          {a.name}
                        </a>
                      ) : (
                        a.name
                      )}
                      {i < item.advisors!.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              )}
              {/* <p className="experience-details">
                Topic: {item.topic}
              </p> */}
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

export default Experience 