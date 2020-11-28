import React from "react";
import styles from "./ScrollIndicator.module.css";

const scrollIndicator = React.forwardRef((props, ref) => {
  return (
    <div className={styles.ProgressContainer}>
      <div ref={ref} className={styles.ProgressBar}></div>
    </div>
  );
});

export default scrollIndicator;
