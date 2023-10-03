import React, { useRef, useState } from "react";
import styles from "./login.module.css";
import Navbar from "../Navbar/Navbar";
import login_background_svg from "../Svgs/login_background_design.svg";
import { Helmet } from "react-helmet";
import right_arrow from "../Svgs/right_arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import google_logo from "../Images/google_logo.png";
import { motion, useInView } from "framer-motion";
import supabase from "../Supabase/Supabase";

export default function Login() {
  const ref = useRef(null);
  const navigate = useNavigate();

  const isInView = useInView(ref, { once: true });
  const containerAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    bounce: { y: [0, -20, 0], transition: { duration: 0.5 } },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const { user, session, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } catch (error) {
      console.error("Error during signIn:", error.message);
    }
  };
  return (
    <div ref={ref} animate={{ opacity: 1 }} style={{ width: "100%" }}>
      <Navbar />
      <motion.div
        className={styles.login_container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerAnimation}
        transition={{ duration: 0.5 }}
      >
        <Helmet>
          <title>Unique JobSearch - Login</title>
        </Helmet>
        <div className={styles.login_background_svg}>
          <img
            alt="background_image"
            className={styles.background_svg}
            src={login_background_svg}
          />
          <div className={styles.login_form_container}>
            <button
              className={styles.google_login}
              onClick={() => handleGoogleLogin()}
            >
              <img
                alt="google logo"
                src={google_logo}
                classNmae={styles.google_logo}
              />{" "}
              Login with Google
            </button>
            <div className={styles.hr}>
              <div className={styles.hr_text}>Or</div>
            </div>
            <form onSubmit={handleLogin} style={{ width: "100%" }}>
              <label className={styles.label}>Email </label>
              <input
                className={styles.input}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className={styles.label}>Password</label>
              <input
                className={styles.input}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className={`${styles.input} ${styles.button}`}>
                Sign in
                <img
                  width="100%"
                  className={styles.right_arrow}
                  src={right_arrow}
                  alt="arrow"
                />
              </button>
            </form>
            <Link to="#" className={styles.forgot_password}>
              Forgot Password?
            </Link>
            <div className={styles.signup_text}>
              Already have an accound?{" "}
              <Link to="/signup" className={styles.signup}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
