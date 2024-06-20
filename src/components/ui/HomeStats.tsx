import React from 'react'

function HomeStats() {
  return (
    <section className='home-stats'>
      <h2>Vi har gjort detta förut</h2>
      <p>Vår erfarenhet sträcker sig långt. Vi har arbetat med flertals företag i olika branscher och förstår vad för mätvärden som behövs och vad du kan få ut från dina affärsystem.</p>

      <div className="stats">
        <div className="stat">
            <span className="stat-number">10+</span>
            <p className="stat-text">företag</p>
        </div>
        <div className="stat">
            <span className="stat-number">100+</span>
            <p className="stat-text">Rapporter</p>
        </div>
        <div className="stat">
            <span className="stat-number">500+</span>
            <p className="stat-text">Nyckeltal</p>
        </div>
      </div>
    </section>
  )
}

export default HomeStats