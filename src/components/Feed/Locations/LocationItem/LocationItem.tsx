import React from "react";

import styles from "./LocationItem.module.scss";
import { ILocation } from "../../../../interfaces/app.interface";
import { useNavigate } from "react-router-dom";

type Props = {
  location: ILocation;
};

const LocationItem: React.FC<Props> = ({ location }) => {
  const navigate = useNavigate();

  const handleClick = (location: ILocation) => {
    navigate(`/location/${location.id}`);
  };

  return (
    <div className={styles.container} onClick={() => handleClick(location)}>
      <div>Name: {location.name}</div>
      <div>Type: {location.type}</div>
      <div>Dimension: {location.dimension}</div>
    </div>
  );
};

export { LocationItem };
