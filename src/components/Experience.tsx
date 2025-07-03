import React from 'react'

interface ExperienceItem {
  title: string
  institution: string
  period: string
  advisor?: string
  advisorUrl?: string
  topic: string
  logo: string
  logoAlt: string
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: 'Summer Research Intern',
      institution: 'Blender Lab - University of Illinois Urbana-Champaign',
      period: '05/2025 - Present',
      advisor: 'Prof. Heng Ji',
      advisorUrl: 'https://blender.cs.illinois.edu/hengji.html',
      topic: 'Temporal Difference Encoders',
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo'
    },
    {
      title: 'Graduate Student Researcher',
      institution: 'Blender Lab - University of Illinois Urbana-Champaign',
      period: '09/2025 - Present',
      advisor: 'Prof. Heng Ji',
      advisorUrl: 'https://blender.cs.illinois.edu/hengji.html',
      topic: 'SSL - Visual Representation Learning',
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo'
    },
    {
      title: 'Software Engineer - Data Virtualization',
      institution: 'eQ Technologic',
      period: '08/2021 - 07/2024',
      topic: 'SSL - Visual Representation Learning',
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
              {item.advisor && item.advisor.trim() !== "" && (
                <p className="education-extra-details">
                  Advisor:{' '}
                  {item.advisorUrl ? (
                    <a 
                      href={item.advisorUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{fontSize:"0.875rem"}}
                    >
                      {item.advisor}
                    </a>
                  ) : (
                    item.advisor
                  )}
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