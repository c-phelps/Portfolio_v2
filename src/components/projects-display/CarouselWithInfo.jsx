import projects from "../../utils/Projects.js";
import AutoCarousel from "./AutoCarousel.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import { useState} from "react";
import styles from "./CarouselWithInfo.module.css";

const CarouselWithInfo = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={`${styles.projectBlock} container`}>
      <h2 id="projects">Projects</h2>
      <AutoCarousel index={index} setIndex={setIndex} projects={projects} />
      <ProjectDetails project={projects[index]} />
    </div>
  );
};

export default CarouselWithInfo;
