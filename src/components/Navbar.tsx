import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>Om oss</li>
          <li>Vår expertis</li>
        </ul>
        <img src={logo} alt="mekkis-logo" className="logo" />
        <ul>
          <li>Updrag</li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <img src={hero} alt="" className="nav-gradient" />
    </>
  );
}

export default Navbar;
