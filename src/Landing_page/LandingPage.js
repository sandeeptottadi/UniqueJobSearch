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

  const scaleElements = {
    hidden: { scale: 0.9 },
    visible: { scale: 1 },
  };

  const fadeElements = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={ref} animate={{ opacity: 1 }} style={{ width: "100%" }}>
      <div className={styles.landing_page_container}>
        <Helmet>
          <title>Unique JobSearch - Find your dream tech job</title>
        </Helmet>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeElements}
          transition={{ duration: 0.3 }}
        >
          <Navbar />
        </motion.div>
        <motion.div
          className={styles.main_title}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleElements}
          transition={{ duration: 0.7 }}
        >
          Find Jobs{" "}
          <span className={styles.highlight_title}>Like Never Before</span>.
          <br /> Elevate Your Job Hunt with UJs.
        </motion.div>
        <motion.div
          className={styles.sub_title}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeElements}
          transition={{ duration: 1 }}
        >
          Search, filter, apply and land your dream tech job with{" "}
          <span className={styles.underline_title}>unique job board.</span>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={scaleElements}
          transition={{ duration: 1.3 }}
        >
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
    </div>
  );
}
