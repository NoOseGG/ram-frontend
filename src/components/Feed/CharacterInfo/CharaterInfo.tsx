import React from "react";
import { useParams } from "react-router-dom";

import styles from "./CharacterInfo.module.scss";

const CharaterInfo: React.FC = () => {
  const { id } = useParams();

  return <div className={styles.container}>CharaterInfo {id}</div>;
};

export default CharaterInfo;
