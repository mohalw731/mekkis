import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

function HomeStats() {

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.10 2']
  })

  return (
    <motion.section className='home-stats' style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }}>
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
    </motion.section>
  )
}

export default HomeStats
