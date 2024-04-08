import React from "react";

import styles from "./FeedPage.module.scss";

import { Feed } from "../components/Feed/Feed";
import { Header } from "../components/Header/Header";

const FeedPage: React.FC = () => {
  console.log(JSON.stringify(styles));

  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <Feed />
      </div>
    </div>
  );
};

export default FeedPage;
