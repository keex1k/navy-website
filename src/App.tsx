import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Offer } from "./components/Offer/Offer";
import { ProjectsPreview } from "./components/ProjectsPreview/ProjectsPreview";
import { ProjectsSpin } from "./components/ProjectsSpin/ProjectsSpin";
import { PromoBar } from "./components/PromoBar/PromoBar";

function App() {
  return (
    <div className="app">
      <PromoBar />
      <Header />
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
