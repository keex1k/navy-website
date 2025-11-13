import "./Offer.scss";

export const Offer: React.FC = () => {
  return (
    <section className="offer" id="offer">
      <div className="offer__nav">
        <h2 className="offer__title">OFERTA</h2>
      </div>

      <div className="offer__image">
        <span className="offer__decor">_</span>
        <p className="offer__text">
          KILKANAŚCIE LAT DOŚWIADCZENIA<br />
          I SETKI ZADOWOLONYCH KLIENTÓW
        </p>
      </div>
    </section>
  );
};
