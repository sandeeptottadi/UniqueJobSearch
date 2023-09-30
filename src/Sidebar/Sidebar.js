import React, { useRef } from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router";
import right_arrow from "../Svgs/right_arrow.svg";
import twitter_logo from "../Images/twitter_logo.png";
import { motion, useInView } from "framer-motion";

export default function Sidebar() {
  function toogleResourcesDropdown() {
    let element = document.getElementById("resources");
    if (element.classList.contains(styles.hide_dropdown)) {
      element.classList.remove(styles.hide_dropdown);
      element.classList.add(styles.show_dropdown);
    } else {
      element.classList.add(styles.hide_dropdown);
      element.classList.remove(styles.show_dropdown);
    }
  }
  function toogleSocialsDropdown() {
    let element = document.getElementById("socials");
    if (element.classList.contains(styles.hide_dropdown)) {
      element.classList.remove(styles.hide_dropdown);
      element.classList.add(styles.show_dropdown);
    } else {
      element.classList.add(styles.hide_dropdown);
      element.classList.remove(styles.show_dropdown);
    }
  }
  const navigate = useNavigate();

  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div
      ref={ref}
      animate={{ opacity: 1 }}
      className={styles.sidebar_container}
      id="sidebar_container"
    >
      <motion.div
        className={styles.landing_page_container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerAnimation}
        transition={{ duration: 1 }} // Adjust the duration as needed
      >
        <div className={styles.sidebar}>
          <div className={styles.links}>
            <div
              className={`${styles.link} ${styles.hide_dropdown}`}
              onClick={() => toogleResourcesDropdown()}
              id="resources"
            >
              <div className={styles.link_content}>
                <div className={styles.link_text}>Resources</div>
                <div className={styles.dropdown_arrow}></div>
              </div>
              <div className={styles.sub_link}>
                <div
                  onClick={() => navigate("/advice")}
                  className={styles.dropdown_item}
                >
                  <img
                    alt="pic"
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
                    alt="pic"
                    src="https://uploads-ssl.webflow.com/6384d19f2fb3c69ee15983da/6386fe78eb97d4b274d3e5db_usp-social-inbox.png"
                    width="60"
                    height="60"
                  />
                  <div className={styles.col}>
                    <div className={styles.title}>Create email alert</div>
                    <div className={styles.sub_title}>
                      Get notified every time new jobs for your criteria shows
                      up.
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => navigate("/user_guides")}
                  className={styles.dropdown_item}
                >
                  <img
                    alt="pic"
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
            </div>
            <div
              className={`${styles.link} ${styles.hide_dropdown}`}
              onClick={() => toogleSocialsDropdown()}
              id="socials"
            >
              <div className={styles.link_content}>
                <div className={styles.link_text}>Socials</div>
                <div className={styles.dropdown_arrow}></div>
              </div>
              <div className={styles.sub_link}>
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
            <button
              onClick={() => navigate("/login")}
              className={styles.button}
            >
              Login
              <img
                alt="right arrow"
                className={styles.right_arrow}
                src={right_arrow}
              />{" "}
            </button>
            <button
              onClick={() => navigate("/signup")}
              className={styles.button}
            >
              Signup
              <img
                alt="right arrow"
                className={styles.right_arrow}
                src={right_arrow}
              />{" "}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
