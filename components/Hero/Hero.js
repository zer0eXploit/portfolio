import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const hero = (props) => {
  return (
    <div className={styles.HeroSection}>
      {props.children}
      <div onClick={() => props.scrollTo()} className={styles.ArrowBorder}>
        <Image
          alt="down"
          src="https://res.cloudinary.com/zer0exploit/image/upload/v1606553288/portfolio/arrow-down_dzvpfq.svg"
          width="30px"
          className={styles.DownArrow}
        />
      </div>
    </div>
  );
};

export default hero;
