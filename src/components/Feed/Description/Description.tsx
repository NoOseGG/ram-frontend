import React from "react";

import styles from "./Description.module.scss";

import description from "../../../assets/description.png";
import rick from "../../../assets/rick.png";
import morty from "../../../assets/morty.png";

const Description: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={morty} alt="morty" />
      <div className={styles.textContainer}>
        {/* <div className={styles.title}>Rick And Morty</div> */}
        <img className={styles.descriptionImage} src={description} alt="description" />
        <div className={styles.text}>
          "Rick and Morty" - your central access point to everything related to
          this cult animated series. Here you'll find it all: detailed
          descriptions of each episode, exclusive interviews with creators and
          actors, the latest news about upcoming seasons and related projects,
          as well as the opportunity to connect with other fans and share your
          impressions and theories. Everything you need for a complete immersion
          in this crazy and brilliant world is here, at "Rick and Morty".
        </div>
      </div>
      <img className={styles.image} src={rick} alt="rick" />
    </div>
  );
};

export { Description };
