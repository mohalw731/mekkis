import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li className="top-ul">Om oss</li>
          <li>Vår expertis</li>
        </ul>
        <img src={logo} alt="mekkis-logo" className="logo" />
        <ul>
          <li>Updrag</li>
          <li>Kontakt</li>
        </ul>

        <div className="menu">
          <span><HamburgerMenuIcon className="nav-icon"/></span>
        </div>
      </nav>
      <img src={hero} alt="" className="nav-gradient" />
    </>
  );
}

export default Navbar;
