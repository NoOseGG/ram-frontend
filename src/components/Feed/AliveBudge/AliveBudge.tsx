import React from "react";

import styles from "./AliveBudge.module.scss";

type Props = {
  backgroundColor?: string;
};

const AliveBudge: React.FC<Props> = ({ backgroundColor = "green" }) => {
  return <span className={styles.budge} style={{ backgroundColor }} />;
};

export { AliveBudge };
