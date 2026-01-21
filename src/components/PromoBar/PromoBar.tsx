import './PromoBar.scss';
import { useState } from 'react';

export type PromoBarData = {
  text: string;
  isActive: boolean;
};

type Props = {
  promo: PromoBarData
}

export const PromoBar: React.FC<Props> = ({promo}) => {
  const [visible, setVisible] = useState(true);

  if (!visible || !promo.isActive) return null;

  return (
    <div className="promo-bar"  id="home">
      <p className="promo-bar__paragraph">{promo.text}</p>
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
