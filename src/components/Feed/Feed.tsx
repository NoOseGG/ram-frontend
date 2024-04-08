import React from "react";

import styles from "./Feed.module.scss";

import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";
import ListOfCharacters from "./ListOfCharacters/ListOfCharacters";

const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <img className={styles.image} src={morty} alt="morty" />
        <div className={styles.textContainer}>
          <div className={styles.title}>Rick And Morty</div>
          <div className={styles.text}>
            "Rick and Morty" - your central access point to everything related
            to this cult animated series. Here you'll find it all: detailed
            descriptions of each episode, exclusive interviews with creators and
            actors, the latest news about upcoming seasons and related projects,
            as well as the opportunity to connect with other fans and share your
            impressions and theories. Everything you need for a complete
            immersion in this crazy and brilliant world is here, at "Rick and
            Morty".
          </div>
        </div>
        <img className={styles.image} src={rick} alt="rick" />
      </div>
      <ListOfCharacters />
    </div>
  );
};

export { Feed };
