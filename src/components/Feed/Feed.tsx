import React from "react";

import styles from "./Feed.module.scss";

import { Description } from "./Description/Description";
import { Locations } from "./Locations/Locations";
import { Characters } from "./Characters/Characters";
import { Episodes } from "./Episodes/Episodes";

const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      <Description />
      <Characters />
      <Locations />
      <Episodes />
    </div>
  );
};

export { Feed };
