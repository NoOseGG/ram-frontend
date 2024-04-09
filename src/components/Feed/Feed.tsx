import React from "react";

import styles from "./Feed.module.scss";

import ListOfCharacters from "./ListOfCharacters/ListOfCharacters";
import { Description } from "./Description/Description";

const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      <Description />
      <ListOfCharacters />
    </div>
  );
};

export { Feed };
