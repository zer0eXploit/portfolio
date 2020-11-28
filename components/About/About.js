import React from "react";
import styles from "./About.module.css";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Intro from "../Intro/Intro";
import ToolsAndTech from "../ToolsAndTech/ToolsAndTech";
import Languages from "../Languages/Languages";

const about = React.forwardRef((props, { introEdu }) => {
  return (
    <div className={styles.About}>
      <div className={styles.Container} ref={introEdu}>
        <Intro />
        <Education />
      </div>
      <Skills />
      <ToolsAndTech />
      <Languages />
    </div>
  );
});

export default about;
