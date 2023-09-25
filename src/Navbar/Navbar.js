import React, { useRef } from "react";
import styles from "./navbar.module.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import right_arrow from "../Svgs/right_arrow.svg";
import Resources_dropdown from "./Dropdown/Resources_dropdown";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import Socials_dropdown from "./Dropdown/Socials_dropdown";
import Sidebar from "../Sidebar/Sidebar";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  function showDropdown(name) {
    document
      .getElementById(`${name}_dropdown`)
      .classList.add(styles.show_dropdown);
  }
  function hideDropdown(name) {
    document
      .getElementById(`${name}_dropdown`)
      .classList.remove(styles.show_dropdown);
  }
  function animateMenubars() {
    const bar1 = document.getElementById("menubar-1");
    const bar2 = document.getElementById("menubar-2");
    const bar3 = document.getElementById("menubar-3");
    if (bar1.classList.contains(styles.animate_menubars)) {
      bar1.classList.remove(styles.animate_menubars);
      bar2.classList.remove(styles.animate_menubars);
      bar3.classList.remove(styles.animate_menubars);
      document.getElementById("sidebar_container").style.width = "0%";
    } else {
      bar1.classList.add(styles.animate_menubars);
      bar2.classList.add(styles.animate_menubars);
      bar3.classList.add(styles.animate_menubars);
      document.getElementById("sidebar_container").style.width = "100%";
    }
  }
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div ref={ref} animate={{ opacity: 1 }} style={{ width: "100%" }}>
      <Sidebar />
      <motion.div
        className={styles.navbar_container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerAnimation}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.title_container} onClick={() => navigate("/")}>
          <img className={styles.logo} src={logo} />
          <div className={styles.title}>Unique JobSearch</div>
        </div>
        <div className={styles.links}>
          <div
            onMouseOver={() => showDropdown("resources")}
            onMouseOut={() => hideDropdown("resources")}
            className={styles.link}
          >
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={styles.link_text}>Resources</div>
                <div className={styles.dropdown_arrow}></div>
              </div>
              <div id="resources_dropdown" className={styles.hide_dropdown}>
                <Resources_dropdown
                  name="Resources"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <div
            onMouseOver={() => showDropdown("socials")}
            onMouseOut={() => hideDropdown("socials")}
            className={styles.link}
          >
            <div className={styles.col}>
              <div className={styles.row}>
                <div className={styles.link_text}>Socials</div>
                <div className={styles.dropdown_arrow}></div>
              </div>
              <div
                id="socials_dropdown"
                className={`${styles.hide_dropdown} ${styles.socials}`}
              >
                <Socials_dropdown
                  name="Socials"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
          <Link to="/pricing" className={styles.link}>
            <div className={styles.link_text}>Pricing</div>
          </Link>
          <Link to="/contact" className={styles.link}>
            <div className={styles.link_text}>Contact</div>
          </Link>
        </div>
        {location.pathname === "/signup" ? (
          <div className={styles.login_link}>
            Have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#3762e3",
                marginLeft: "10px",
              }}
              to="/login"
            >
              Log in{" "}
            </Link>
          </div>
        ) : location.pathname === "/login" ? (
          <div className={styles.login_link}>
            Don't have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "#3762e3",
                marginLeft: "10px",
              }}
              to="/signup"
            >
              Sign up{" "}
            </Link>
          </div>
        ) : (
          <>
            <div className={styles.buttons}>
              <button
                onClick={() => navigate("/login")}
                className={styles.button}
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className={styles.button}
              >
                Get Started{" "}
                <img className={styles.right_arrow} src={right_arrow} />{" "}
              </button>
            </div>
            <div className={styles.menubars} onClick={() => animateMenubars()}>
              <div className={styles.menubar} id="menubar-1"></div>
              <div className={styles.menubar} id="menubar-2"></div>
              <div className={styles.menubar} id="menubar-3"></div>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
