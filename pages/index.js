import { useRef, useCallback, useEffect, useState } from "react";

import Head from "next/head";
import Layout from "../components/Layout";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import Hero from "../components/Hero/Hero";
import TextBox from "../components/TextBox/TextBox";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import BackToTop from "../components/BackToTop/BackToTop";

import smoothscroll from "smoothscroll-polyfill";

export default function Home() {
  const progressBarRef = useRef();
  const heroContentsRef = useRef();
  const introEduRef = useRef();
  const upBtnRef = useRef();

  const scrollToHandler = useCallback(
    (position) => {
      if (position === undefined) {
        position = heroContentsRef.current.scrollHeight - 62; // minus nav height
      }
      window.scroll({
        top: position,
        behavior: "smooth",
      });
    },
    [heroContentsRef]
  );

  const scrollEventHandler = useCallback(() => {
    if (upBtnRef.current !== null) {
      // Shows/Hide the backToTop button
      if (window.scrollY >= document.documentElement.clientHeight) {
        upBtnRef.current.style.visibility = "visible";
      } else {
        upBtnRef.current.style.visibility = "hidden";
      }

      // Navbar scroll progress indicator
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      let height =
        document.documentElement.scrollHeight -
        heroContentsRef.current.scrollHeight;
      let scrolled = (winScroll / height) * 100;
      progressBarRef.current.style.width = scrolled + "%";
    }
  }, [upBtnRef, heroContentsRef, progressBarRef]);

  useEffect(() => {
    window.onscroll = scrollEventHandler;
    smoothscroll.polyfill();
  }, [scrollEventHandler, smoothscroll]);

  return (
    <Layout>
      <Head>
        <title>Yan Waipann | Developer</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ScrollIndicator ref={progressBarRef} />
      <Hero scrollTo={scrollToHandler}>
        <TextBox ref={heroContentsRef} />
      </Hero>
      <About
        ref={{
          introEdu: introEduRef,
        }}
      />
      <Footer />
      <BackToTop ref={upBtnRef} scrollTo={scrollToHandler} />
    </Layout>
  );
}
