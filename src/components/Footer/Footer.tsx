import React from "react";

import styles from "./Footer.module.scss";

import vkIcon from "../../assets/icons/vk-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
import linkedInIcon from "../../assets/icons/linkenin-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="https://vk.com/noosegg" target="_blank">
            <img className="styles.icon" src={vkIcon} alt="vk-icon" />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="https://github.com/NoOseGG" target="_blank">
            <img className="styles.icon" src={githubIcon} alt="github-icon" />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="https://www.linkedin.com/in/yury-svirydzenka-30a03519a/" target="_blank">
            <img
              className="styles.icon"
              src={linkedInIcon}
              alt="linkedIn-icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
