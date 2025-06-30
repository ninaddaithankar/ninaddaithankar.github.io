import React from 'react'

const Misc: React.FC = () => {
  return (
    <div className="card">
      <h2 className="section-title">Me</h2>
      <div className="section-divider"></div>
      
      <ul className="misc-list">
        <li className="running-li">
          Recently, I got into long distance running, and I absolutely love it. I am training for a sub-60 minute 10km finish. 
          Stay tuned for a blog on my experience as a beginner runner and how it's rewiring my brain.
        </li>
        <li className="cricket-li">
          I grew up playing Cricket. I was a part of my school's winning U-12, U-14 interschool cricket team. I also played for eQ's Cricket Team for 2 years during my time there.
        </li>
        <li className="piano-li">
          Yiruma's "River Flows in You" inspired me to self learn piano during my undergrad. I also learned to play Bansuri (Indian Flute). I love listening to Indian and Western Classical Music. Favorites include Pt. Bhimsen Joshi, Pt. Hariprasad Chaurasia, Schubert, Beethoven and film scores from Hans Zimmer.
        </li>
      </ul>
    </div>
  )
}

export default Misc 