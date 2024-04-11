import React from "react";

import styles from "./ButtonsNavigate.module.scss";

type Props = {
  isPrev: string | null | undefined;
  isNext: string | null | undefined;
  handleClickPreviousButton: () => void;
  handleClickNextButton: () => void;
  handleClickMoreButton: () => void;
};

const ButtonNavigate: React.FC<Props> = ({
  isPrev,
  isNext,
  handleClickPreviousButton,
  handleClickNextButton,
  handleClickMoreButton,
}) => {
  return (
    <div className={styles.container}>
      {isPrev ? (
        <button
          className={styles.buttonNavigate}
          onClick={handleClickPreviousButton}
        >
          Previous page
        </button>
      ) : (
        <div style={{ width: 200 }}></div>
      )}
      <button className={styles.buttonShowMore} onClick={handleClickMoreButton}>
        Hide more
      </button>
      {isNext ? (
        <button
          className={styles.buttonNavigate}
          onClick={handleClickNextButton}
        >
          Next page
        </button>
      ) : (
        <div style={{ width: 200 }}></div>
      )}
    </div>
  );
};

export default ButtonNavigate;
