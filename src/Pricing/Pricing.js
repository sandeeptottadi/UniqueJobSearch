import React, { useRef } from "react";
import styles from "./pricing.module.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import green_tick from "../Svgs/green_tick.svg";
import down_arrow from "../Svgs/down_arrow.svg";
import { motion, useInView } from "framer-motion";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatePricingBlocks = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div
      className={styles.pricing_container}
      ref={ref}
      animate={{ opacity: 1 }}
      style={{ width: "100%" }}
    >
      <div className={styles.pricing_background}></div>
      <Helmet>
        <title>Unique JobSearch - Pricing</title>
      </Helmet>
      <Navbar />
      <div className={styles.main_title}>Pricing</div>
      <div className={styles.sub_title}>
        We got you covered, Pick the pack that best suits your use case!
      </div>
      <div className={styles.pricing_blocks}>
        <motion.div
          className={styles.pricing_block}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animatePricingBlocks}
          transition={{ duration: 0.3 }}
        >
          $5/Week<button className={styles.button}>Subscribe</button>
        </motion.div>
        <motion.div
          className={styles.pricing_block}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animatePricingBlocks}
          transition={{ duration: 0.6 }}
        >
          $15/Month<button className={styles.button}>Subscribe</button>
        </motion.div>
        <motion.div
          className={styles.pricing_block}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animatePricingBlocks}
          transition={{ duration: 0.3 }}
        >
          $60/Year<button className={styles.button}>Subscribe</button>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "30px" }}
        transition={{ duration: 1, ease: "linear", repeat: Infinity }}
      >
        <img className={styles.arrow} src={down_arrow} />
      </motion.div>
      <div className={styles.advantages_container}>
        <div className={styles.main_title}>For every plan,</div>
        <div className={styles.main_title}> We offer..</div>
        <ul className={styles.center}>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Job Search
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Company wise jobs
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Advice
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Newsletter
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Resume templetes
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Personalized Cover Letters
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Personalized Chatbot
          </li>{" "}
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Emails on new job postings
          </li>{" "}
        </ul>
      </div>
    </div>
  );
}
