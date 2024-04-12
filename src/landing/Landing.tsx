import React from "react";

import styles from "./Landing.module.scss";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const Landing: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.innerContainer}>{children}</main>
      <Footer />
    </div>
  );
};

export { Landing };
