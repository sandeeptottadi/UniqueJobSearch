import React from "react";
import styles from "./contact.module.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div className={styles.contact_container}>
      <Helmet>
        <title>Unique JobSearch - Contact</title>
      </Helmet>
      <Navbar />
    </div>
  );
}
