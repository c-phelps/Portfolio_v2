import styles from "./AboutMe.module.css";

const Intro = () => {
  return (
    <div className={`${styles.aboutMeContainer} container`}>
      <h2 id="AboutMe">About Me</h2>
      <p>
        I’m a <span className={styles.glowPulseGold}>full-stack web developer</span> with a foundation in software implementation and a Full-Stack Web
        Development Certificate from UNC–Chapel Hill.
      </p>
      <p>
        I’ve built and contributed to several full-stack applications using technologies like{" "}
        <span className={styles.glowPulseGold}>React, Node.js, MongoDB, and SQL</span>. Recent projects include Blunder’s Birth, Workout Wizardz, and
        MemorEase.
      </p>
      <p>
        Previously, I worked at Accelerated Technology Laboratories, customizing software for laboratory clients using
        VBA and SQL. This experience taught me how to solve real-world problems through software and collaborate
        effectively with both technical and non-technical teams.
      </p>
      <p>
        I’m currently seeking opportunities to grow as a developer, contribute to meaningful products, and collaborate
        with creative teams.
      </p>
      <p>Outside of coding, I enjoy chess and am an avid fan of <span className={styles.glowPulseRed}>Liverpool FC</span>.</p>
    </div>
  );
};

  export default Intro;