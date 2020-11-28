import React from "react";
import styles from "./Footer.module.css";

const footer = () => {
  return (
    <div className={styles.Footer}>
      <p>&copy; Yan Waipann </p>
      <small>Built with Next.js</small>
    </div>
  );
};

export default footer;
