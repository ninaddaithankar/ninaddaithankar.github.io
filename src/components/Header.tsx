import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="hero-header">
      <img 
        src="/assets/me-chicago-fountain.jpeg" 
        alt="Ninad Daithankar" 
        className="hero-profile-image"
      />
      <h1 className="hero-title">Hi, I'm Ninad.</h1>
      <div className="hero-about">
        <p>
          I'm a machine learning researcher working on multi-step reasoning, long-horizon planning, and agentic task completion.
        </p>
        <p>
          Previously, I worked on general digital agents at <a href="https://adept.ai" target="_blank" rel="noopener noreferrer">Adept AI Labs</a>, which <a href="https://www.aboutamazon.com/news/innovation-at-amazon/amazon-acquires-adept" target="_blank" rel="noopener noreferrer">exited</a> to Amazon. I graduated from Berkeley, where I built tools for data scientists at the Berkeley <a href="https://sky.cs.berkeley.edu/" target="_blank" rel="noopener noreferrer">Sky Lab</a>, taught the <a href="https://cs61a.org/" target="_blank" rel="noopener noreferrer">Intro to CS</a> and Intro to Web Dev classes, and ran hackathons at <a href="https://calhacks.io/" target="_blank" rel="noopener noreferrer">Cal Hacks</a>.
        </p>
        <p>
          I am interested in pedagogy, philosophy, science fiction, and the past and future of how we work. Reach me at <a href="mailto:hi@amks.me">hi@amks.me</a>.
        </p>
      </div>
      <div className="hero-social-row">
        <a href="#" aria-label="Resume" className="hero-social-icon"><i className="fa-regular fa-file-lines"></i></a>
        <a href="#" aria-label="Scholar" className="hero-social-icon"><i className="fa-solid fa-graduation-cap"></i></a>
        <a href="https://github.com/ninaddaithankar" aria-label="GitHub" className="hero-social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="#" aria-label="LinkedIn" className="hero-social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
      <div className="hero-actions">
        <a href="#" className="hero-btn">Notes</a>
        <a href="#" className="hero-btn hero-btn-outline" target="_blank" rel="noopener noreferrer">Research <span style={{fontSize: '1em'}}>&#8599;</span></a>
      </div>
    </header>
  )
}

export default Header 