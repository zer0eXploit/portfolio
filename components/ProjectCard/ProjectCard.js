import React from "react";
import Image from "next/image";
import styles from "./ProjectCard.module.css";

const projectCard = (props) => {
  return (
    <div className={styles.Card}>
      <Image src={props.imgUrl} alt="Avatar" style={{ width: "100%" }} />
      <h3>{props.title}</h3>
      <div className={styles.CardDescription}>
        <p>{props.explaination}</p>
      </div>
      <a
        className={styles.Button}
        href={props.projectUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Visit Project</span>{" "}
        <i className="fas fa-external-link-square-alt"></i>
      </a>
      {props.github ? (
        <a
          className={styles.Button}
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>{" "}
          <i className="fas fa-external-link-square-alt"></i>
        </a>
      ) : null}
    </div>
  );
};

export default projectCard;
