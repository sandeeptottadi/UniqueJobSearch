import React, { useRef } from "react";
import styles from "./signup.module.css";
import Navbar from "../Navbar/Navbar";
import { Helmet } from "react-helmet";
import right_arrow from "../Svgs/right_arrow.svg";
import { Link } from "react-router-dom";
import login_background_svg from "../Svgs/login_background_design.svg";
import google_logo from "../Images/google_logo.png";
import green_tick from "../Svgs/green_tick.svg";
import { useInView, motion } from "framer-motion";

export default function Signup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const containerAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div
      ref={ref}
      animate={{ opacity: 1 }}
      style={{ width: "100%" }}
      className={styles.signup_container}
    >
      <Navbar />
      <Helmet>
        <title>UniqueJobSearch - Signup</title>
      </Helmet>
      <motion.div
        className={styles.left_container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerAnimation}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.features_container}>
          <div className={styles.main_title}>
            {" "}
            Start your job search today! 🚀
          </div>
          <div className={styles.sub_title}>
            Create an account to started with your 7 day trial.
          </div>
          <ul>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Job Search
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Company wise jobs
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Advice
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Newsletter
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Resume templetes
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Personalized Cover Letters
            </li>
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Personalized Chatbot
            </li>{" "}
            <li className={styles.feature}>
              <img src={green_tick} className={styles.green_tick} />
              Emails on new job postings
            </li>{" "}
          </ul>
          <div className={styles.sub_title}>
            You will have access to all features on the paid plan for 7 days.
            See all features on the{" "}
            <Link
              style={{ textDecoration: "none", color: "#3762e3" }}
              to="/pricing"
            >
              pricing page
            </Link>
            .
          </div>
        </div>
      </motion.div>
      <div className={styles.right_container}>
        <div className={styles.login_background_svg}>
          <img
            alt="background_image"
            className={styles.background_svg}
            src={login_background_svg}
          />
          <div className={styles.login_form_container}>
            <button className={styles.google_login}>
              <img src={google_logo} classNmae={styles.google_logo} /> Login
              with Google
            </button>
            <div className={styles.hr}>
              <div className={styles.hr_text}>Or</div>
            </div>
            <form style={{ width: "100%" }}>
              <label className={styles.label}>Email </label>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
              />
              <label className={styles.label}>Passowrd</label>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
              />
              <button className={`${styles.input} ${styles.button}`}>
                Sign up
                <img
                  width="100%"
                  className={styles.right_arrow}
                  src={right_arrow}
                  alt="arrow"
                />
              </button>
            </form>
            <div className={styles.signup_text}>
              Already have an accound?{" "}
              <Link to="/login" className={styles.signup}>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
