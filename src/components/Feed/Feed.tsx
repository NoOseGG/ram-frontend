import React from "react";

import styles from "./Feed.module.scss";

import ListOfCharacters from "./ListOfCharacters/Characters";
import { Description } from "./Description/Description";
import { Locations } from "./Locations/Locations";

const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      <Description />
      <ListOfCharacters />
      <Locations />
    </div>
  );
};

export { Feed };
