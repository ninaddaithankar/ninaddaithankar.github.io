import React from 'react'

const Research: React.FC = () => {
  return (
    <div className="card">
      <h2 className="section-title">Research Interest</h2>
      <div className="section-divider"></div>
      
      <div className="text-content">
        <p>
          I have a wide interest in NLP. Currently, I am focusing on the following topics:
        </p>
        
        <div className="research-item">
          <strong>Knowledge in Language Models</strong>
          <p>
            Given that LLMs can serve as knowledge bases, I want to explore how the knowledges are stored in LLMs. 
            My goal is to help LLMs understand and utilize the knowledge in a better way.
          </p>
        </div>
        
        <div className="research-item">
          <strong>Language Models' Explainability and Interpretability</strong>
          <p>
            LLMs's behaviors are always unpredictable and unorganized, I hope to help the community understanding 
            LLMs from an intrinsic perspective.
          </p>
        </div>
        
        <p>
          Besides, I am also quite interested in Multi-Modal Learning.
        </p>
      </div>
    </div>
  )
}

export default Research 