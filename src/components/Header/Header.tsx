import React from "react";

import styles from "./Header.module.scss";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
          onClick={handleClickLogo}
        />
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Characters</li>
            <li className={styles.menuItem}>Locations</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
