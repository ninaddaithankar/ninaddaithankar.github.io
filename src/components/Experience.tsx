import React from 'react'

interface ExperienceItem {
  title: string
  institution: string
  period: string
  advisor: string
  advisorUrl?: string
  topic: string
  logo: string
  logoAlt: string
}

const Experience: React.FC = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: 'Visiting Undergraduate Student',
      institution: 'University of Illinois Urbana-Champaign',
      period: '10/2023 - 01/2024',
      advisor: 'Prof. Heng Ji',
      advisorUrl: 'https://blender.cs.illinois.edu/hengji.html',
      topic: 'Knowledge Editing and the Ripple Effect behavior of LLMs',
      logo: '/assets/uiuc.png',
      logoAlt: 'UIUC Logo'
    },
    {
      title: 'Research Intern',
      institution: 'University of California Berkeley',
      period: '05/2023 - 10/2023',
      advisor: 'Prof. Jiantao Jiao and Banghua Zhu',
      advisorUrl: 'https://people.eecs.berkeley.edu/~jiantao/',
      topic: 'PlanBench: A Benchmark for Planning with Large Language Models',
      logo: '/assets/ucb.png',
      logoAlt: 'UCB Logo'
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
                {item.title}, {item.institution}
              </h3>
              <p className="experience-period">{item.period}</p>
              <p className="experience-details">
                Advisor:{' '}
                <a 
                  href={item.advisorUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {item.advisor}
                </a>
                {item.title === 'Research Intern' && (
                  <>
                    {' '}and{' '}
                    <a 
                      href="https://people.eecs.berkeley.edu/~banghua/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Banghua Zhu
                    </a>
                  </>
                )}
                {item.title === 'Visiting Undergraduate Student' && (
                  <>
                    , and{' '}
                    <a 
                      href="https://zhangzx-uiuc.github.io/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Zixuan Zhang
                    </a>
                  </>
                )}
              </p>
              <p className="experience-details">
                Topic: {item.topic}
              </p>
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