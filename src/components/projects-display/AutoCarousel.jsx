import React, { useEffect, useState, useRef } from "react";
import styles from "./AutoCarousel.module.css";

const AutoCarousel = ({ index, setIndex, projects }) => {
  // determine the index of projects being iterated through
  const intervalRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setIndex((current) => (current + 1) % projects.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, projects.length, setIndex]);

  return (
    <div className={styles.carousel} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {projects.map((project, i) => {
        let className = styles.image;
        let onClick = null;
        // if the project being processed by map method is the current index, display it on top with no translate
        // if the project being processed is next or prev, slide them to the left or right and change their display
        // default (above) is for the project to be invisible (opacity 0, zIndex 0)
        if (i === index) {
          className += ` ${styles.active}`;
        } else if (i === prevIndex) {
          className += ` ${styles.prev}`;
          onClick = () => setIndex(prevIndex);
        } else if (i === nextIndex) {
          className += ` ${styles.next}`;
          onClick = () => setIndex(nextIndex);
        }

        return <img key={i} src={project.image} alt={`slide ${i}`} className={className} onClick={onClick} />;
      })}
    </div>
  );
};
export default AutoCarousel;
