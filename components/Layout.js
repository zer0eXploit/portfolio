// import { useRef } from "react";
import Head from "next/head";
import Nav from "./Nav/Nav";

const Layout = ({ children }) => {
  // const themeToggleRef = useRef();

  // const themeToggleHandler = useCallback(() => {
  //   const rootElement = document.getElementById("__next");
  //   if (themeToggleRef.current.checked) {
  //     setIsDarkTheme(true);
  //     rootElement.classList.add("dark-theme"); // css at app.css
  //   } else {
  //     setIsDarkTheme(false);
  //     rootElement.classList.remove("dark-theme"); // css at app.css
  //   }
  // }, [themeToggleRef]);

  return (
    <>
      <Head>
        <link rel="icon" href="/fav.png" />
        <meta name="description" content="Yan Waipann's Portfolio" />
        <meta
          property="og:image"
          content="https://github.com/zer0eXploit/zer0eXploit.github.io/settings/og-template"
        />
        <meta name="og:title" content="Yan Waipann | Developer" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          key="preconnect"
          rel="preconnect"
          href="https://fonts.gstatic.com"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        ></link>
      </Head>
      <Nav
      // themeToggle={themeToggleHandler}
      // ref={themeToggleRef}
      // active={isDarkTheme}
      ></Nav>
      <main>{children}</main>
    </>
  );
};

export default Layout;
