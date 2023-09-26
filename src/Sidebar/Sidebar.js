import React from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router";
import right_arrow from "../Svgs/right_arrow.svg";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar_container} id="sidebar_container">
      <div className={styles.sidebar}>
        <div className={styles.links}>
          <div className={styles.link}>
            <div className={styles.link_content}>
              <div className={styles.link_text}>Resources</div>
              <div className={styles.dropdown_arrow}></div>
            </div>
            <div className={styles.sub_link}></div>
          </div>
          <div className={styles.link}>
            <div className={styles.link_content}>
              <div className={styles.link_text}>Socials</div>
              <div className={styles.dropdown_arrow}></div>
            </div>
            <div className={styles.sub_link}></div>
          </div>
          <div className={styles.link}>
            <div className={styles.link_content}>
              <div className={styles.link_text}>Pricing</div>
            </div>
          </div>
          <div className={styles.link}>
            <div className={styles.link_content}>
              <div className={styles.link_text}>Contact</div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.buttons}>
          <button onClick={() => navigate("/login")} className={styles.button}>
            Login
            <img
              alt="right arrow"
              className={styles.right_arrow}
              src={right_arrow}
            />{" "}
          </button>
          <button onClick={() => navigate("/signup")} className={styles.button}>
            Signup
            <img
              alt="right arrow"
              className={styles.right_arrow}
              src={right_arrow}
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
