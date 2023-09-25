import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import styles from "./landing_page.module.css";
import Navbar from "../Navbar/Navbar";
import right_arrow from "../Svgs/right_arrow.svg";
import { useNavigate } from "react-router";
import { useInView, motion } from "framer-motion";

export default function Landing_page() {
  const navigate = useNavigate();

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={ref} animate={{ opacity: 1 }} style={{ width: "100%" }}>
      <motion.div
        className={styles.landing_page_container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerAnimation}
        transition={{ duration: 0.5 }} // Adjust the duration as needed
      >
        <Helmet>
          <title>Unique JobSearch - Find your dream tech job</title>
        </Helmet>
        <Navbar />
        <div className={styles.main_title}>
          Find Jobs{" "}
          <span className={styles.highlight_title}>Like Never Before</span>.
          <br /> Elevate Your Job Hunt with UJs.
        </div>
        <div className={styles.sub_title}>
          Search, filter, apply and land your dream tech job with{" "}
          <span className={styles.underline_title}>unique job board.</span>
        </div>
        <button
          onClick={() => navigate("/pricing")}
          className={styles.get_started_btn}
        >
          Get Started{" "}
          <img
            alt="right arrow"
            className={styles.right_arrow}
            src={right_arrow}
          />
        </button>
      </motion.div>
    </div>
  );
}
