import React from "react";

import styles from './FeedPage.module.css';

import { Feed } from "../components/Feed/Feed";
import { Header } from "../components/Header/Header";



const FeedPage: React.FC = () => {
  console.log(JSON.stringify(styles));
  
  return (
    <div className={styles.container}>
      <Header/>
      <Feed />
    </div>
  );
};

export default FeedPage;


