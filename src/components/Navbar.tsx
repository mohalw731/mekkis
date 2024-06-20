import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav>
        <ul>
          <li className="top-ul">Om oss</li>
          <li>Vår expertis</li>
        </ul>
        <img src={logo} alt="mekkis-logo" className="logo" />
        <ul>
          <li>Uppdarg</li>
          <li>Kontakt</li>
        </ul>
        
        <div className="menu" onClick={() => setIsOpen(prev => !prev)}>
          <span>
            <HamburgerMenuIcon className="nav-icon" />
          </span>
        </div>
      </nav>
      <div className={`menu-list ${isOpen ? 'menu-open' : ''}`}>
        <ul>
          <li>Hem</li>
          <li>Om oss</li>
          <li>Uppdrag</li>
          <li>Vår expertis</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <img src={hero} alt="" className="nav-gradient" />
    </>
  );
}

export default Navbar;
