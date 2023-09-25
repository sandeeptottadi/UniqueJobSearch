import React from "react";
import styles from "./dropdown.module.css";
import twitter_logo from "../../Images/twitter_logo.png";

export default function SocialsDropdown(props) {
  return (
    <div className={styles.dropdown_container}>
      <div className={styles.main_title}>{props.name}</div>
      <div className={styles.row}>
        <div className={styles.socials_dropdown_item}>
          <img
            alt="social logo"
            src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/6384d19f2fb3c6fbff59845b_icon-6-integrations-saas-x-template.svg"
          />
          <div className={styles.title}>Facebook</div>
        </div>
        <div className={styles.socials_dropdown_item}>
          <img
            alt="social logo"
            src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/63876279a3764f03a2d6b199_linkedin-integration-logo.png"
          />
          <div className={styles.title}>LinkedIn</div>
        </div>
        <div className={styles.socials_dropdown_item}>
          <img
            alt="social logo"
            src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/63885a618d40e420bce87976_instagram-integration-logo.png"
          />
          <div className={styles.title}>Instagram</div>
        </div>
        <div className={styles.socials_dropdown_item}>
          <img alt="social logo" src={twitter_logo} />
          <div className={styles.title}>Twitter</div>
        </div>
      </div>
    </div>
  );
}
