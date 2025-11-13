import "./Footer.scss";
import logo from "../../assets/NAVY_LOGO_WHITE.png";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__bottom">© NAVY Interiors</div>
      <div className="footer__top">
        <ul className="footer__list">
          <li className="footer__element">
            <a href="#contact" className="footer__link">
              KONTAKT
            </a>
          </li>
          <li className="footer__element">
            <a href="#offer" className="footer__link">
              OFERTA
            </a>
          </li>
          <li className="footer__element">
            <a href="#about" className="footer__link">
              O NAVY
            </a>
          </li>
        </ul>

        <form className="footer__form">
          <p>NEWSLETTER</p>
          <label htmlFor="mail">ADRES E-MAIL*</label>
          <div className="footer__input-box">
            <input
              id="mail"
              type="email"
              className="footer__input"
              placeholder="Wprowadź email"
            />
            <button className="footer__button">WYŚLIJ</button>
          </div>
        </form>

        <div className="footer__logo-box">
          <a href="#home">
            <img src={logo} alt="NAVY Logo" className="footer__logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};
