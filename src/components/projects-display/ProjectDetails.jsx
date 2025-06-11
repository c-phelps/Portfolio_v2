import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./ProjectDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetails = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setShowDetails(false);

    const duration = project.name.length + project.role.length;
    const estimated = duration * 50 + 100;

    const timer = setTimeout(() => setShowDetails(true), estimated);

    return () => clearTimeout(timer);
  }, [project]);

  return (
    <div className={styles.detailsBody}>
      <h3>
        <Typewriter
          key={`${project.name}-${project.role}`}
          words={[`${project.name} — ${project.role}`]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={0}
        />
      </h3>
      <div className={`${styles.fadeIn} ${showDetails ? styles.visible : ""}`}>
        <p>{project.about}</p>
        <p>
          <i>Tech: </i>
          {project.technologies.join(", ")}
        </p>
      </div>
      <div className={styles.detailsLinks}>
        <a href={`${project.link}`} className={styles.toolTip} target="_blank">
          {project.name}
          <span className={styles.tooltipText}>
            Note: Render deployments may take a few moments to load due to hosting limitations.
          </span>
        </a>
        <a
          href={`${project.link}`}
          className={styles.toolTip}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: "20px" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
