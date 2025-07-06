import React from 'react'

const Misc: React.FC = () => {
  return (
    <div className="card">
      <h2 className="section-title">Me</h2>
      <div className="section-divider"></div>
      
      <ul className="misc-list">
        <li className="running-li">
          Recently, I got into long distance running. It feels like meditation in motion (after your body gets used to running, of course). Currently, I'm training for a sub-60 minute 10K. I'd love to run a marathon some day! 
        </li>
        <li className="cricket-li">
          I grew up playing Cricket. I was a part of my school's winning U-12, U-14 interschool cricket team. I also played for eQ's Cricket Team as a batting all-rounder for 2 years during my time there.
        </li>
        <li className="piano-li">
          Yiruma's "River Flows in You" inspired me to self learn piano during my undergrad. I also learned to play Bansuri (Indian Flute). I love listening to Indian and Western Classical Music. Favorites include 
          <a href="https://youtu.be/dmfMXOz_RYo?si=GOXk-_gNHf6BOpYS" target="_blank" rel="noopener noreferrer">Pt. Bhimsen Joshi</a>, 
          <a href="https://youtu.be/wkwuXy7CbYU?si=LGm_csj792n9MZtg" target="_blank" rel="noopener noreferrer"> Pt. Hariprasad Chaurasia</a>,
          <a href="https://youtu.be/QqVscSR5Oe0?si=BhvtFZ6BWirsGOh5" target="_blank" rel="noopener noreferrer"> Schubert</a>, 
          <a href="https://youtu.be/vGq3-Fi_zQY?si=gyzXm4FE1AH2xDpf" target="_blank" rel="noopener noreferrer"> Beethoven</a>,
          <a href="https://youtu.be/fEGNNuEM3Fc?si=mJMIiJKwHkrahp2E" target="_blank" rel="noopener noreferrer"> Mahler</a>,
          and film scores from <a href="https://youtu.be/JRHrBuaNDdo?si=1u8cHlROW5ggljy9" target="_blank" rel="noopener noreferrer"> Hans Zimmer</a>.
        </li>
      </ul>
    </div>
  )
}

export default Misc 