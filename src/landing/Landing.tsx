import React from "react";

import styles from "./Landing.module.scss";

import { Header } from "../components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Landing: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>{children}</div>
    </div>
  );
};

export { Landing };