import { Typewriter } from "react-simple-typewriter";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <section className={`${styles.intro} container`}>
      <h1>
        <Typewriter words={["Chris Phelps - Full-Stack Developer"]} loop={1} typeSpeed={60} cursor cursorStyle="_" />
      </h1>
      <p>
        I build scalable, functional web apps using React, Node.js, MongoDB, and SQL - with design that supports clarity
        and usability.
      </p>
      <a href="#projects" className={styles.ctaButton}>
        View My Work
      </a>
    </section>
  );
};

export default Intro;
