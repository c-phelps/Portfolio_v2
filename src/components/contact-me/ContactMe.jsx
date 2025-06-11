import styles from "./ContactMe.module.css";

const ContactMe = () => {
  return (
    <div className={`${styles.contactMeContainer} container`}>
      
    {/* <div className={`${styles.contactMeInnerContainer} container`}> */}
      <h2 id="contact">Contact Me</h2>
      <p>I am always looking forward to new opportunities and collaborations -</p>
      <ul className={styles.contactList}>
        <li>Email: <a href="mailto:c.j.phelps89@gmail.com">c.j.phelps89@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/christopher-phelps-dev/">linkedin.com/in/christopher-phelps</a></li>
        <li>GitHub: <a href="https://github.com/c-phelps">github.com/c-phelps</a></li>
      </ul>
      {/* </div> */}
      <h2></h2>
    </div>
  );
};

  export default ContactMe;