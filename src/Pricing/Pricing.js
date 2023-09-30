import React from "react";
import styles from "./pricing.module.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

export default function Pricing() {
  return (
    <div className={styles.pricing_container}>
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
        <div className={styles.pricing_block}>
          $5/Week<button className={styles.button}>Subscribe</button>
        </div>
        <div className={styles.pricing_block}>
          $15/Month<button className={styles.button}>Subscribe</button>
        </div>
        <div className={styles.pricing_block}>
          $60/Year<button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
