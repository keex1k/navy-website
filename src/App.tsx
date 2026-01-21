import "./App.scss";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Offer } from "./components/Offer/Offer";
import { ProjectsPreview } from "./components/ProjectsPreview/ProjectsPreview";
import { ProjectsSpin } from "./components/ProjectsSpin/ProjectsSpin";
import { PromoBar } from "./components/PromoBar/PromoBar";
import { getPromoBar } from "./fetchs/promoBar-fetch.ts";
import type { PromoBarData } from "./components/PromoBar/PromoBar";

function App() {
  const [promo, setPromo] = useState<PromoBarData | null>(null);

  useEffect(() => {
    const fetchPromo = async () => {
      const data = await getPromoBar();
      console.log(data);
      setPromo(data ?? { text: 'aaa', isActive: true });
    };

    fetchPromo();
    
  }, []);

  return (
    <div className="app">
      {promo && <PromoBar promo={promo} />}
      <Header />
      {promo?.text}
      <main className="app__content">
        <ProjectsPreview />
        <Offer />
        <ProjectsSpin />
      </main>
      <Footer />
    </div>
  );
}

export default App;
