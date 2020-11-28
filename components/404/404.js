import React from "react";
import Link from "next/link";

import styles from "./FourOFour.module.css";

const fourOFour = (props) => {
  return (
    <div className={styles.ErrorPage}>
      <code className={styles.Center}>
        <p>
          <samp>
            Cannot resolve path
            <br />
            <br />
            a.k.a 404!
            <br />
            <br />
            Please go back{" "}
            <Link href="/">
              <a>Home</a>
            </Link>
          </samp>
        </p>
      </code>
    </div>
  );
};

export default fourOFour;
