import React from "react";
import styles from "./dropdown.module.css";
import { useNavigate } from "react-router";

export default function Resources_dropdown(props) {
  const navigate = useNavigate();
  return (
    <div className={styles.dropdown_container}>
      <div className={styles.main_title}>{props.name}</div>
      <div onClick={() => navigate("/advice")} className={styles.dropdown_item}>
        <img
          src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/63877dca3a75074152e47885_menu-blog.png"
          width="60"
          height="60"
        />
        <div className={styles.col}>
          <div className={styles.title}>Advice</div>
          <div className={styles.sub_title}>
            Get advice to boost up your career.
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate("/create-email-alert")}
        className={styles.dropdown_item}
      >
        <img
          src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/6386fe78eb97d4b274d3e5db_usp-social-inbox.png"
          width="60"
          height="60"
        />
        <div className={styles.col}>
          <div className={styles.title}>Create email alert</div>
          <div className={styles.sub_title}>
            Get notified every time new jobs for your criteria shows up.
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate("/user_guides")}
        className={styles.dropdown_item}
      >
        <img
          src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/63877dcb1c9a0015f26a1fb7_menu-help.png"
          width="60"
          height="60"
        />
        <div className={styles.col}>
          <div className={styles.title}>Newsletter</div>
          <div className={styles.sub_title}>
            Learn how Unique JobSearch works...
          </div>
        </div>
      </div>
    </div>
  );
}
