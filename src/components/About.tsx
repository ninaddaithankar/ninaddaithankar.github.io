import React from 'react'

const About: React.FC = () => {
  return (
    <div className="card">
      <p className="text-content">
        Hi there. I am 1st year MSCS student at{' '}
        <a 
          href="https://illinois.edu/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          University of Illinois Urbana-Champaign
        </a>
        , honored to be advised by{' '}
        <a 
          href="https://blender.cs.illinois.edu/hengji.html" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Prof. Heng Ji
        </a>
        . My research interest mainly focus on Natural Language Processing and Large Language Models.
      </p>
    </div>
  )
}

export default About 