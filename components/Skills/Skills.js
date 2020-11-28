import React from "react";
import classes from "./Skills.module.css";

const skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <p>HTML</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.html].join(" ")}></div>
      </div>

      <p>CSS</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.css].join(" ")}></div>
      </div>

      <p>JavaScript</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.js].join(" ")}></div>
      </div>

      <p>Python</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.python].join(" ")}></div>
      </div>

      <p>MongoDB</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.mongodb].join(" ")}></div>
      </div>

      <p>PostgreSQL</p>
      <div className={classes.container}>
        <div className={[classes.skills, classes.psql].join(" ")}></div>
      </div>
    </>
  );
};

export default skills;
