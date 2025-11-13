import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="header" id="home">
      <Navigation />
      <div className="header__content">
        <span className="header__decor">_</span>
        <h1 className="header__title">NAVY – WIĘCEJ NIŻ PROJEKT</h1>
        <p className="header__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </header>
  );
};
