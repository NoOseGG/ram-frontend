import React from "react";

import styles from "./FeedPage.module.scss";

import { Feed } from "../components/Feed/Feed";
import { Header } from "../components/Header/Header";
import sessionStorageService from "../services/sessionStorage.service";

const FeedPage: React.FC = () => {
  console.log(JSON.stringify(styles));

  return (
    <>
      <Feed />
    </>
  );
};

export default FeedPage;
