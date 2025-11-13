import "./Navigation.scss";
import logo from "../../assets/NAVY_LOGO.png";
import { useState } from "react";

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="navigation__inner">
        {/* Lewa strona */}
        <ul className="navigation__list navigation__list--left">
          <li>
            <a className="navigation__element" href="#projects">
              PROJEKTY
            </a>
          </li>
          <li>
            <a className="navigation__element" href="#offer">
              OFERTA
            </a>
          </li>
        </ul>

        {/* Logo */}
        <a href="#home" className="navigation__logo-link">
          <img src={logo} alt="Logo NAVY" className="navigation__logo" />
        </a>

        {/* Prawa strona */}
        <ul className="navigation__list navigation__list--right">
          <li>
            <a className="navigation__element" href="#about">
              O NAVY
            </a>
          </li>
          <li>
            <a className="navigation__element" href="#contact">
              KONTAKT
            </a>
          </li>
        </ul>

        {/* Hamburger menu (mobile) */}
        <button
          className={`navigation__burger ${menuOpen ? "active" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Menu mobilne */}
      <div className={`navigation__mobile ${menuOpen ? "open" : ""}`}>
        <a href="#projects" onClick={() => setMenuOpen(false)}>
          PROJEKTY
        </a>
        <a href="#offer" onClick={() => setMenuOpen(false)}>
          OFERTA
        </a>
        <a href="#about" onClick={() => setMenuOpen(false)}>
          O NAVY
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          KONTAKT
        </a>
      </div>
    </nav>
  );
};
