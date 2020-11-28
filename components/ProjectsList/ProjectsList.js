import React from "react";
import styles from "./ProjectsList.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projectsInfo } from "./ProjectsInfo";

const projects = () => {
  return (
    <div className={styles.Projects}>
      <h2>Projects I have worked on</h2>
      <div className={styles.GridContainer}>
        {projectsInfo.map((ele) => {
          return (
            <ProjectCard
              imgUrl={ele.imgUrl}
              title={ele.title}
              explaination={ele.explaination}
              key={ele.id}
              projectUrl={ele.projectUrl}
              github={ele.github}
            />
          );
        })}
      </div>
      <small className={styles.AdditionalInfo}>
        <i className="fas fa-clipboard"></i> Only listed some of my projects.
        For a complete list of projects, please visit my{" "}
        <a
          href="https://github.com/zer0eXploit?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.MoreProjectsLink}
        >
          Github Profile.
        </a>
      </small>
    </div>
  );
};

export default projects;
