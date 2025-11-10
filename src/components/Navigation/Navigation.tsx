import "./Navigation.scss";
import logo from "../../assets/NAVY_LOGO.png"

export const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <a className="navigation__element" href="#projects">
          PROJEKTY
        </a>
        <a className="navigation__element" href="#offer">
          OFERTA
        </a>
      </ul>

      <a href="#home">
        <img src={logo} alt="" className="navigation__logo" />
      </a>

      <ul className="navigation__list">
        <a className="navigation__element" href="#about">
          O NAVY
        </a>
        <a className="navigation__element" href="#contact">
          KONTAKT
        </a>
      </ul>
    </div>
  );
};
