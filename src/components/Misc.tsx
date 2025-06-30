import React from 'react'

const Misc: React.FC = () => {
  return (
    <div className="card">
      <h2 className="section-title">Misc</h2>
      <div className="section-divider"></div>
      
      <ul className="misc-list">
        <li>
          I have a lovely cat called{' '}
          <a 
            href="/cat.html" 
          >
            Wangzai
          </a>{' '}
          (旺仔 in Chinese). I give her the name because she is white and super sweet! 
          Like the Wangzai Milk(:
        </li>
        <li>
          My favorite singer is David Tao (陶喆 in Chinese). His songs features R&B.
        </li>
      </ul>
    </div>
  )
}

export default Misc 