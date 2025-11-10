import React, { useRef, useEffect } from "react";
import "./ProjectsSpin.scss";

import p1 from "../../assets/photos/photo1.jpeg";
import p2 from "../../assets/photos/photo2.jpeg";
import p3 from "../../assets/photos/photo3.jpeg";
import p4 from "../../assets/photos/photo4.jpeg";

const images = [p1, p2, p3, p4];

export const ProjectsSpin: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = 0.5; // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // powielamy obrazki w DOM dla płynnej pętli
    const totalImages = [...images, ...images];
    track.innerHTML = "";
    totalImages.forEach((img, i) => {
      const div = document.createElement("div");
      div.className = "projects-spin__item";
      const image = document.createElement("img");
      image.src = img;
      image.alt = `Project ${i + 1}`;
      div.appendChild(image);
      track.appendChild(div);
    });

    let x = 0;

    const animate = () => {
      x += speed;
      if (x >= track.scrollWidth / 2) x = 0; // reset do połowy, pętla
      track.style.transform = `translateX(-${x}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="projects-spin">
      <div className="projects-spin__track" ref={trackRef}></div>
    </div>
  );
};
