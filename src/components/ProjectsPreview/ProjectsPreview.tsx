import "./ProjectsPreview.scss";
import next from "../../assets/icons/next-svgrepo-com.svg";
import prev from "../../assets/icons/previous-svgrepo-com.svg";
import project from "../../assets/icons/project-presentation-svgrepo-com.svg";
import { useState, useEffect } from "react";

export const ProjectsPreview: React.FC = () => {
  const projects = [
    { id: 1, img: project, title: "Projekt 1" },
    { id: 2, img: project, title: "Projekt 2" },
    { id: 3, img: project, title: "Projekt 3" },
    { id: 4, img: project, title: "Projekt 4" },
    { id: 5, img: project, title: "Projekt 5" },
    { id: 6, img: project, title: "Projekt 6" },
    { id: 7, img: project, title: "Projekt 7" },
    { id: 8, img: project, title: "Projekt 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // 🧠 Dynamiczne dopasowanie ilości widocznych projektów do szerokości okna
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex < projects.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="projects-preview" id="projects">
      <div className="projects-preview__nav">
        <h2 className="projects-preview__title">PROJEKTY</h2>
        <div className="projects-preview__buttons">
          <button
            className="projects-preview__prev"
            onClick={handlePrev}
            aria-label="Poprzedni projekt"
          >
            <img src={prev} alt="Poprzedni" />
          </button>
          <button
            className="projects-preview__next"
            onClick={handleNext}
            aria-label="Następny projekt"
          >
            <img src={next} alt="Następny" />
          </button>
        </div>
      </div>

      <div className="projects-preview__carousel">
        <div
          className="projects-preview__track"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {projects.map((p) => (
            <article key={p.id} className="projects-preview__item">
              <div className="projects-preview__img-box">
                <img src={p.img} alt={p.title} />
              </div>
              <h3>{p.title}</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
