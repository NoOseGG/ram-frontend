import React from "react";

import styles from "./Header.module.scss";

import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Гланая</li>
            <li className={styles.menuItem}>Поиск</li>
            <li className={styles.menuItem}>О Нас</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Header };
