import { useEffect, useState, useRef } from "react";
import styles from "./AutoCarousel.module.css";

const AutoCarousel = ({ index, setIndex, projects }) => {
  // determine the index of projects being iterated through
  const prevIndex = (index - 1 + projects.length) % projects.length;
  const nextIndex = (index + 1) % projects.length;

  const [paused, setPaused] = useState(false);

  const timeoutRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  const DURATION = 6000;
  // initial mount effect
  // useEffect(() => {
  //   resetProgressBar();
  //   startProgressBar(DURATION);
  //   startTimeRef.current = Date.now();

  //   timeoutRef.current = setTimeout(() => {
  //     setIndex((current) => (current + 1) % projects.length);
  //       resetTimerAndProgress();
  //   }, DURATION);

  //   return () => clearTimeout(timeoutRef.current);
  // }, []);

  // state change effect
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    if (!paused) {
      startTimeRef.current = Date.now() - elapsedRef.current;

      startProgressBar(DURATION - elapsedRef.current);

      timeoutRef.current = setTimeout(() => {
        setIndex((current) => (current + 1) % projects.length);
        resetTimerAndProgress();
      }, DURATION - elapsedRef.current);
    } else {
      if (startTimeRef.current) {
        elapsedRef.current = Date.now() - startTimeRef.current;
      }

      if (progressRef.current) {
        const compWidth = getComputedStyle(progressRef.current).width;
        progressRef.current.style.transition = "none";
        progressRef.current.style.width = compWidth;
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [paused, index, projects.length, setIndex]);

  // helper functions
  const resetTimerAndProgress = () => {
    clearTimeout(timeoutRef.current);
    elapsedRef.current = 0;
    resetProgressBar();
    startProgressBar(DURATION);
    startTimeRef.current = Date.now();

    timeoutRef.current = setTimeout(() => {
      setIndex((current) => (current + 1) % projects.length);
      resetTimerAndProgress();
    }, DURATION);
  };

  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = "none";
      progressRef.current.style.width = "1%"; //snapback
      void progressRef.current.offsetWidth; //reflow
    }
  };

  const startProgressBar = (remainingTime) => {
    if (progressRef.current) {
      progressRef.current.style.transition = `width ${remainingTime}ms linear`;
      progressRef.current.style.width = "100%";
    }
  };

  const handleClick = (newIndex) => {
    clearTimeout(timeoutRef.current);
    setIndex(newIndex);
    resetTimerAndProgress();
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
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
            onClick = () => handleClick(prevIndex);
          } else if (i === nextIndex) {
            className += ` ${styles.next}`;
            onClick = () => handleClick(nextIndex);
          }

          return <img key={i} src={project.image} alt={`slide ${i}`} className={className} onClick={onClick} />;
        })}
      </div>

      <div className={styles.progressContainer}>
        <div className={styles.progressTrack}></div>
        <div className={styles.progressBar} ref={progressRef}></div>
        <div className={styles.indicators}>
          {projects.map((_, i) => (
            <div key={i} className={i === index ? styles.full : styles.empty} onClick={() => handleClick(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AutoCarousel;
