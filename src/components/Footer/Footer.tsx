import "./Footer.scss";
import logo from "../../assets/NAVY_LOGO_WHITE.png";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="white-bar">© NAVY Interiors</div>
      <div className="footer">
        <ul className="footer__list">
          <li className="footer__element">
            <a href="#contact" className="footer__link">KONTAKT</a>
            +
          </li>
          <li className="footer__element">
            <a href="#offer"  className="footer__link">OFERTA</a>
            +
          </li>          
          <li className="footer__element">
            <a href="#about"  className="footer__link">O NAVY</a>
            +
          </li>
        </ul>
        <form action="submit" className="footer__form">
          <p>NEWSLETTER</p>
          <label htmlFor="mail">ADRES E-MAIL*</label>
          <div className="footer__input-box">
            <input id="mail" type="text" className="footer__input" placeholder="Wprowadź swój email"/>
            <button className="footer__button">CONTINUE</button>
          </div>
        </form>
        <a href="#home">
          <img src={logo} alt="" className="footer__logo" />
        </a>
      </div>
    </>
  );
};
