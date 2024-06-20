import logo from '../assets/logo.svg'
import footer from '../assets/footer.svg'
function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <h2>Vill du veta mer?</h2>
        <p>Ta reda på hur vi kan hjälpa dig</p>
        <button className="btn">Kontakta oss</button>
      </div>

      <hr />

      <div className="footer-end">
        <div className="contact-info">
          <h2>Kontakt:</h2>
          <p>info@mekkis.se</p>
          <p>+46 70-483 48 15</p>
        </div>

        <img src={logo} className='footer-logo'/>

        <p>© 2024 Mekhael Konsultbyrå AB</p>
      </div>

      <img src={footer} className='footer-gradient' />
    </footer>
  )
}

export default Footer
