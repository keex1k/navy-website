import './PromoBar.scss';
import { useState } from 'react';

export const PromoBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="promo-bar"  id="home">
      <p className="promo-bar__paragraph">PROMOCJE</p>
      <button
        className="promo-bar__button"
        aria-label="Zamknij pasek promocyjny"
        onClick={() => setVisible(false)}
      >
        X
      </button>
    </div>
  );
};
