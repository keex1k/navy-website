import "./ProjectsPreview.scss";
import next from "../../assets/icons/next-svgrepo-com.svg";
import prev from "../../assets/icons/previous-svgrepo-com.svg";
import project from "../../assets/icons/project-presentation-svgrepo-com.svg";
import { useState } from "react";

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

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const visibleCount = 4;

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
    <div className="projects-preview">
      <div className="projects-preview__nav">
        <p className="projects-preview__title">PROJEKTY</p>
        <div className="projects-preview__buttons">
          <button className="projects-preview__prev" onClick={handlePrev}>
            <img src={prev} alt="Poprzedni" />
          </button>
          <button className="projects-preview__next" onClick={handleNext}>
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
            <div key={p.id} className="projects-preview__item">
              <img src={p.img} alt={p.title} />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
