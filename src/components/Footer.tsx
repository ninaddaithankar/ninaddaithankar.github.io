import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>
        © 2024 Ninad Daithankar
      </p>
      <p className="last-updated">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  )
}

export default Footer 