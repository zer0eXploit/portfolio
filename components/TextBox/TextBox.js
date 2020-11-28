import React from "react";
import styles from "./TextBox.module.css";

const TextBox = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.Contents}>
      <p>
        {"Yan Waipann"}
        <br />
        {"Javascript and Python Dev"}
      </p>
    </div>
  );
});

export default TextBox;
