import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Offer } from "./components/Offer/Offer";
import { ProjectsPreview } from "./components/ProjectsPreview/ProjectsPreview";
import { ProjectsSpin } from "./components/ProjectsSpin/ProjectsSpin";
import { PromoBar } from "./components/PromoBar/PromoBar";

function App() {
  return (
    <div className="app">
      <>
        <PromoBar />
        <Header />
      </>

      <ProjectsPreview />
      <Offer />
      <ProjectsSpin />
      <Footer />
    </div>
  );
}

export default App;
