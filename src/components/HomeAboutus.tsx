import SubtextUI from './ui/SubtextUI'
import aboutus from '../assets/aboutUs.svg'
import gradient from '../assets/aboutUsGradient.svg'
import gradient2 from '../assets/aboutUsGradient2.svg'
import { GoGoal } from 'react-icons/go'
import { CiCloud } from 'react-icons/ci'
import { FaSignal } from 'react-icons/fa'
import { useScroll, motion } from 'framer-motion'
import { useRef } from 'react'

export default function HomeAboutus() {
const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 5', '1.33 1.55']
  })

  return (
    <motion.div className="about-us__hero" style={{
      scale: scrollYProgress,
      opacity: scrollYProgress
    }}>
      <SubtextUI title='Vi skapar framtidens analyser och beslutstöd' text='Som specialister inom business intelligence skapar vi rapporter med nyckeltal som främjar ditt beslutstagande och optimerar din verksamhet. Mekkis är en komplett samarbetspartner för dig som behöver hjälp med allt från rådgivning till utveckling. ' />
      <button className='btn'>Läs mer</button>

      <img src={aboutus} className='graphs'/>
      <img src={gradient} className='aboutus-gradient'/>

      <SubtextUI title='Skräddarsydda lösningar just för dig' text='Alla har olika förusättningar och mål, och därför finns det olika behov. Vi är en helhetslösning och hjälper er från början till slut. Oavsett om det är för att bygga en strategi eller för att leda nya projekt. Genom tillgång till rätt insikter skapar bättre beslutstöd för att optimera din verksamet. ' />

    <div className="column-layout">
    <SubtextUI title='Strategi & Projektledning' text='Utifrån era mål och förutsättningar utformar vi en strategi tillsammans. Det gäller allt från att välja rätt val av teknologier, identifiera möjligheter och skapa en långsiktig plan som är anpassade för er. ' icon={<GoGoal className='icon'/>} />

    <SubtextUI title='Utveckling & Support' text='Vi utvecklar skräddarsydda lösningar för din verksamhet och finns med dig hela vägen i allt från administration till support. Genom den senaste teknologin och best-practice metoder så är du redo både nu och i framtiden.' icon={<CiCloud className='icon'/>} />

    <SubtextUI title='Insiktsfulla rapporter' text='Vi skapar rapporter med nyckeltal som din verksamhet behöver för att använda som beslutstöd. Genom erfarenhet av att skapa rapporter inom allt från försäljning till produktion så förstår vi vad för nyckeltal som främjar din verksamhet. '
    icon={<FaSignal className='icon'/>} />

    <button className="btn">Läs mer</button>
    </div>

    <img src={gradient2} className='about-us__gardient-2' />

    </motion.div>
  )
}
