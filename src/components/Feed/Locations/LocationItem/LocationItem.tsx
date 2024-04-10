import React from "react";

import styles from "./LocationItem.module.scss";
import { ILocation } from "../../../../interfaces/app.interface";

type Props = {
  location: ILocation;
};

const LocationItem: React.FC<Props> = ({ location }) => {
  return (
  <div className={styles.container}>
    <div>Name: {location.name}</div>
    <div>Type: {location.type}</div>
    <div>Dimension: {location.dimension}</div>
  </div>
  );
};

export { LocationItem };
