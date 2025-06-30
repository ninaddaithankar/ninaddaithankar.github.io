import React from 'react'

const Awards: React.FC = () => {
  const awards = [
    'Academic Excellence Award (Top 5% GPA), Renmin Univ. of China, 2021, 2023.',
    'Provincial First Prize, Contemporary Undergraduate Mathematical Contest in Modeling, 2022.',
    'Meritorious Mention, Mathematical Contest in Modeling and Interdisciplinary Contest in Modeling, 2022.',
    'First Prize, The 24th Innovation Cup of Renmin University of China, 2022.'
  ]

  return (
    <div className="card">
      <h2 className="section-title">Award</h2>
      <div className="section-divider"></div>
      
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index}>
            <strong>{award.split(',')[0]}</strong>
            {award.includes(',') && award.substring(award.indexOf(','))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Awards 