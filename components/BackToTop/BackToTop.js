import React from "react";
import classes from "./BackToTop.module.css";

const backToTop = React.forwardRef((props, ref) => {
  return (
    <div className={classes.UpBtn} ref={ref} onClick={() => props.scrollTo(0)}>
      <i className="fas fa-chevron-up"></i>
    </div>
  );
});

export default backToTop;
