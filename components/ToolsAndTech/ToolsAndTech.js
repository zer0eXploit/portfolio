import React from "react";
import styles from "./ToolsAndTech.module.css";

const toolsAndTech = () => {
  return (
    <>
      <h1>Tools and Tech</h1>
      <div className={styles.Container}>
        <div>
          <h2>Javascript Libraries</h2>
          <ul>
            <li>ReactJS</li>
            <li>ReduxJS</li>
            <li>Material-UI (React Library)</li>
          </ul>
        </div>
        <div>
          <h2>CSS Libraries</h2>
          <ul>
            <li>Bootstrap</li>
            <li>Semantics-UI</li>
          </ul>
        </div>
        <div>
          <h2>Javascript Frameworks</h2>
          <ul>
            <li>ExpressJS</li>
          </ul>
        </div>
        <div>
          <h2>Python Frameworks</h2>
          <ul>
            <li>Flask (REST APIs)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default toolsAndTech;
