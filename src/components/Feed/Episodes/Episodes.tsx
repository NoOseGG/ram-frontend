import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Episodes.module.scss";

import { IEpisode, IEpisodesResponse } from "../../../interfaces/app.interface";
import { EpisodeItem } from "./EpisodeItem/EpisodeItem";
import { log } from "console";

const getEpisodes = async (episodes: string) => {
  return axios.get<IEpisode[]>(
    `https://rickandmortyapi.com/api/episode/${episodes}`
  );
};

const getEpisode = async (episode: string) => {
  return axios.get<IEpisode>(
    `https://rickandmortyapi.com/api/episode/${episode}`
  );
};

type Props = {
  episodes: string;
};

const Episodes: React.FC<Props> = ({ episodes }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["episodes", episodes],
    queryFn: () => getEpisodes(episodes),
    select: ({ data }) => {
      if (data instanceof Array) return data;
      else return [data];
    },
  });

  console.log(episodes);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Episodes</div>
      <div className={styles.episodesContainer}>
        {data?.map((episode) => (
          <EpisodeItem episode={episode} key={episode.id} />
        ))}
      </div>
    </div>
  );
};

export { Episodes };
