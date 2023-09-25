import React from "react";
import styles from "./pricing.module.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

export default function Pricing() {
  return (
    <div className={styles.pricing_container}>
      <Helmet>
        <title>Unique JobSearch - Pricing</title>
      </Helmet>
      <Navbar />
    </div>
  );
}
