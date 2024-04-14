import React from "react";

import styles from "./EpisodeItem.module.scss";
import { IEpisode } from "../../../../interfaces/app.interface";
import { useNavigate } from "react-router-dom";

type Props = {
  episode: IEpisode;
};

const EpisodeItem: React.FC<Props> = ({ episode }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/episode/${episode.id}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div>{episode.name}</div>
      <div>{episode.episode}</div>
    </div>
  );
};

export { EpisodeItem };
