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
      <div className={styles.pricing_blocks}>
        <motion.div
          className={styles.fremium_pricing_block}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={animatePricingBlocks}
          transition={{ duration: 0.3 }}
        >
          <div>
            Try it for <span style={{ color: "hsl(234, 99%, 65%)" }}>free</span>
          </div>
          0$<button className={styles.button}>Subscribe</button>
        </motion.div>
      </div>
      <div className={styles.arrow_container}>
        <img className={styles.arrow} src={down_arrow} />
      </div>
      <div className={styles.advantages_container}>
        <div className={styles.main_title}>
          For every{" "}
          <span style={{ color: "hsl(234, 99%, 65%)" }}>paid plan</span>,
        </div>
        <div className={styles.main_title}> We offer..</div>
        <ul className={styles.center}>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Upto 5 Job titles (Edit any time)
          </li>
          <li className={styles.feature}>
            <img alt="tick" src={green_tick} className={styles.green_tick} />
            Upto 5 Locations (Edit any time)
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
