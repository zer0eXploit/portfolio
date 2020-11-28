import Link from "next/link";
import Head from "next/head";
import styles from "./Contact.module.css";

const contact = (props) => {
  return (
    <>
      <Head>
        <title>Contact | Yan Waipann</title>
      </Head>
      <div className={styles.Contact}>
        <div>
          <h2>Please reach me at: </h2>
          <code>
            {"{"}yanwaipann[at]gmail[.]com{"}"}
          </code>

          <h2>I am also on: </h2>
          <a
            href="https://www.facebook.com/yan.waipann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={[styles.Social, "fab fa-facebook fa-3x"].join(" ")}
            ></i>
          </a>
          <a
            href="https://github.com/zer0exploit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={[styles.Social, "fab fa-github fa-3x"].join(" ")}></i>
          </a>
          <a
            href="https://m.me/yan.waipann"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={[
                styles.Social,
                "fab fa-facebook-messenger fa-3x",
              ].join(" ")}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yan-waipann-050b45186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={[styles.Social, "fab fa-linkedin fa-3x"].join(" ")}
            ></i>
          </a>

          <hr />
          <Link href="/">
            <a className={styles.BackHome}>Back to Home?</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default contact;
