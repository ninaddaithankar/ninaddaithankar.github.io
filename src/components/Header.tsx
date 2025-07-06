import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="hero-header">
      <img 
        src="/assets/me/trump-tower.jpeg" 
        alt="Ninad Daithankar" 
        className="hero-profile-image"
      />
      <h1 className="hero-title">Hey, I'm Ninad.</h1>
      <div className="hero-about">
        <p>
          I'm a researcher and engineer exploring cognitively inspired foundation models to learn efficient and meaningful representations from video data.
          {/* I'm a researcher currently working on self-supervised learning, particularly visual representation learning. */}
        </p>
        <p>
          I'm pursuing my Masters in CS at UIUC, where I also work with the  <a href="https://blender.cs.illinois.edu/people/" target="_blank" rel="noopener noreferrer">Blender Lab</a> advised by  <a href="https://blender.cs.illinois.edu/hengji.html" target="_blank" rel="noopener noreferrer">Prof. Heng Ji</a>.
          Previously, I worked on the Data Virtualization team at <a href="https://1eq.com" target="_blank" rel="noopener noreferrer">eQ</a> where I built lots of connectors for large-scale data integration.
        </p>
        <p>
          I'm extremely curious about what makes us intelligent, and how we could replicate it. In general, I'm interested in world models, cognitive neuroscience & psychology. 
        </p>
        <p>
          Reach me at <a href="mailto:ninadd2@illinois.edu">ninadd2 [at] illinois [dot] edu</a>.
        </p>
      </div>
      <div className="hero-social-row">
        <a href="/cv.pdf" aria-label="CV" className="hero-social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-file-lines"></i></a>
        {/* <a href="#" aria-label="Scholar" className="hero-social-icon"><i className="fa-solid fa-graduation-cap"></i></a> */}
        <a href="https://github.com/ninaddaithankar" aria-label="GitHub" className="hero-social-icon" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/ninaddaithankar/" aria-label="LinkedIn" className="hero-social-icon"><i className="fa-brands fa-linkedin-in"></i></a>
        <Link to="/blog" className="blog-btn-inline">thoughts <i className="fa-solid fa-chevron-right" style={{paddingLeft:"0.5rem"}}></i></Link>
      </div>
      {/* <div className="hero-actions">
        <a href="#" className="hero-btn">Notes</a>
        <a href="#" className="hero-btn hero-btn-outline" target="_blank" rel="noopener noreferrer">Research <span style={{fontSize: '1em'}}>&#8599;</span></a>
      </div> */}
    </header>
  )
}

export default Header 