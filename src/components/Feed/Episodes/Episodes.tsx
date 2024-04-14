import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Episodes.module.scss";

import { IEpisode } from "../../../interfaces/app.interface";
import { EpisodeItem } from "./EpisodeItem/EpisodeItem";
import { useNavigate } from "react-router-dom";

const getEpisodes = async (episodes: string | undefined) => {
  if (!!episodes)
    return axios.get<IEpisode[]>(
      `https://rickandmortyapi.com/api/episode/${episodes}`
    );
  else
    return axios.get<IEpisode[]>(
      `https://rickandmortyapi.com/api/episode/1,2,3,4`
    );
};

const getEpisode = async (episode: string) => {
  return axios.get<IEpisode>(
    `https://rickandmortyapi.com/api/episode/${episode}`
  );
};

type Props = {
  episodes?: string;
};

const Episodes: React.FC<Props> = ({ episodes }) => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["episodes", episodes],
    queryFn: () => getEpisodes(episodes),
    select: ({ data }) => {
      if (data instanceof Array) return data;
      else return [data];
    },
  });

  const handleClickShowMore = () => {
    navigate("/episode/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Episodes</div>
      <div className={styles.episodesContainer}>
        {data?.map((episode) => (
          <EpisodeItem episode={episode} key={episode.id} />
        ))}
      </div>
      {!episodes && (
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttonShowMore}
            onClick={handleClickShowMore}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export { Episodes };
