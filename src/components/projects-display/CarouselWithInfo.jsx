import projects from "../../utils/Projects.js";
import AutoCarousel from "./AutoCarousel.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import { useState, useEffect } from "react";
import styles from "./CarouselWithInfo.module.css";
import { Typewriter } from "react-simple-typewriter";

const CarouselWithInfo = () => {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   console.log("Current index in parent:", index);
  // }, [index]);

  return (
    <div className={styles.projectBlock}>
      <h2>Projects</h2>
      <AutoCarousel index={index} setIndex={setIndex} projects={projects} />
      <ProjectDetails project={projects[index]} />
    </div>
  );
};

export default CarouselWithInfo;
