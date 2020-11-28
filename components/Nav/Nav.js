import React from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

const nav = React.forwardRef(({ themeToggle, active }, ref) => {
  return (
    <div className={styles.Nav}>
      <div className={styles.Container}>
        <Link href="/">
          <a className={[styles.MyName, styles.LinkButton].join(" ")}>
            Yan Waipann
          </a>
        </Link>
        <Link href="/" exact>
          <a className={styles.LinkButton}>Home</a>
        </Link>
        <Link href="/projects">
          <a className={styles.LinkButton}>Projects</a>
        </Link>
        <Link href="/contact">
          <a className={styles.LinkButton}>Contact</a>
        </Link>
        {/* <div className={styles.TogglerContainer}>
          <label className={styles.Switch}>
            <input
              ref={ref}
              type="checkbox"
              onChange={themeToggle}
              checked={active}
            />
            <span className={styles.Slider}></span>
          </label>
        </div> */}
      </div>
    </div>
  );
});

export default nav;
