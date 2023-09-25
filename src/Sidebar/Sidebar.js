import React from "react";
import styles from "./sidebar.module.css";

export default function Sidebar() {
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
      </div>
    </div>
  );
}
