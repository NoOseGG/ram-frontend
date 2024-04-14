import React from "react";

import styles from "./Header.module.scss";

import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickCharacters = () => {
    navigate("/character/");
  };

  const handleClickLocations = () => {
    navigate("/location/");
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
            <li className={styles.menuItem} onClick={handleClickCharacters}>
              Characters
            </li>
            <li className={styles.menuItem} onClick={handleClickLocations}>
              Locations
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
