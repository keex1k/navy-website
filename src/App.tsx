import "./App.css";
import { Header } from "./components/Header/Header";
import { ProjectsPreview } from "./components/ProjectsPreview/ProjectsPreview";
import { PromoBar } from "./components/PromoBar/PromoBar";

function App() {
  return (
    <div className="app">
      <>
        <PromoBar />
        <Header />
      </>

      <ProjectsPreview />
    </div>
  );
}

export default App;
