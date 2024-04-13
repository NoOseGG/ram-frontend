import React, { ChangeEvent } from "react";

import styles from "./Select.module.scss";

type Props = {
  options: string[];
  handleChangeSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<Props> = ({ options, handleChangeSelect }) => {
  return (
    <select
      className={styles.select}
      onChange={handleChangeSelect}
      aria-placeholder="Choose gender"
    >
      <option value={""}>{options[0]}</option>
      {options.slice(1, options.length).map((item) => (
        <option value={item} key={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export { Select };
