import React, { useEffect, useState, useRef } from "react";
import projects from "../utils/Projects.js";
import { preview } from "vite";

const AutoCarousel = () => {
  // determine the index of projects being iterated through
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % projects.length);
      }, 3000); //3 seconds
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ width: "600px", height: "400px", position: "relative", overflow: "hidden", perspective: "1000px" }}
    >
      {projects.map((project, i) => {
        let style = {
          position: "absolute",
          width: "80%",
          height: "80%",
          top: "10%",
          left: "10%",
          objectFit: "cover",
          transition: "all 0.6s ease-in-out",
          opacity: 0,
          transform: "scale(0.8)",
          zIndex: 0,
        };

        let onClick = null;

        if (i === index) {
          style = {
            ...style,
            opacity: 1,
            transform: "scale(1) translateX(0)",
            zIndex: 3,
          };
        } else if (i === prevIndex) {
          style = {
            ...style,
            opacity: 0.7,
            transform: "scale(0.9) translateX(-50%)",
            zIndex: 2,
            cursor: "pointer",
          };
          onClick = () => setIndex(prevIndex);
        } else if (i === nextIndex) {
          style = {
            ...style,
            opacity: 0.7,
            transform: "scale(0.9) translateX(50%)",
            zIndex: 2,
            cursor: "pointer",
          };
          onClick = () => setIndex(prevIndex);
        }
        return <img key={i} src={project.img} alt={`slide ${i}`} style={style} onClick={onClick} />;
      })}
    </div>
  );
};
export default AutoCarousel;
