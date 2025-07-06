import React from 'react'

const MinimalArt: React.FC = () => (
  <div className="main-bg-art-wrapper">
    <svg
      className="minimal-art-enso"
      viewBox="0 0 100 18.33"
      width="100vw"
      height="auto"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sun glow animation (responsive, reduced opacity) */}
      <circle cx="87" cy="5" r="5" fill="#ff5e3a" opacity="0.10">
        <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.10;0.18;0.10" dur="2.5s" repeatCount="indefinite" />
      </circle>
      {/* Sun (perfectly circular, responsive) */}
      <circle cx="87" cy="5" r="3" fill="url(#sunGradient)" />
      <defs>
        <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5e3a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff5e3a" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="fadeBottom" x1="0" y1="15" x2="0" y2="18.33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fff8eb" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#fff8eb" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* Farthest mountains */}
      <path d="M0 6 Q16.7 5 33.3 6 T66.7 6 T100 5.5 V18.33 H0 Z" fill="#b3c6e0" fillOpacity="0.22" />
      {/* Extra-far mountains */}
      <path d="M0 4 Q25 3 50 4.5 T100 4 V18.33 H0 Z" fill="#dbe6f7" fillOpacity="0.18" />
      {/* Mid mountains */}
      <path d="M0 7.5 Q12.5 6.5 25 7.5 T50 7 T75 8 T100 7.5 V18.33 H0 Z" fill="#6b8bbd" fillOpacity="0.22" />
      {/* Foreground mountains */}
      <path d="M0 10 Q8.3 8.5 20.8 10 T41.7 9 T66.7 10.5 T100 10 V18.33 H0 Z" fill="#2d466b" fillOpacity="0.32" />
      {/* Mist */}
      <rect x="0" y="12" width="100" height="6.33" fill="#fff" fillOpacity="0.18" />
      {/* Lighter, more seamless fade at bottom */}
      <rect x="0" y="13" width="100" height="5.33" fill="url(#fadeBottom)" />
    </svg>
  </div>
)

export default MinimalArt 