import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="last-updated">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <p>
        Made with love, heart and cursor! ♥️
      </p>
      <p> © 2025 Ninad Daithankar</p>
    </div>
  )
}

export default Footer 