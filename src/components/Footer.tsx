import React from 'react'

const LAST_UPDATED = 'February 10, 2026'

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="last-updated">
        Last updated: {LAST_UPDATED}
      </p>
      <p>
        Designed by me, (mostly) made by Cursor! ♥️
      </p>
      <p> © 2026 Ninad Daithankar</p>
    </div>
  )
}

export default Footer 