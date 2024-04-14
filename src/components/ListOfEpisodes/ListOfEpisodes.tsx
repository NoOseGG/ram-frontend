import React, { useState } from "react";

import styles from "./ListOfEpisodes.module.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ButtonNavigate from "../Feed/ButtonsNavigate/ButtonNavigate";
import { EpisodeItem } from "../Feed/Episodes/EpisodeItem/EpisodeItem";
import { IEpisodesResponse } from "../../interfaces/app.interface";

const getEpisodes = async (page: number) => {
  return axios.get<IEpisodesResponse>(
    `https://rickandmortyapi.com/api/episode/?page=${page}`
  );
};

const ListOfEpisodes: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["characters", page],
    queryFn: () => getEpisodes(page),
    select: ({ data }) => data,
  });

  return (
    <div className={styles.container}>
      <>
        <div className={styles.episodesContainer}>
          {data?.results.map((episode) => (
            <EpisodeItem episode={episode} key={episode.id} />
          ))}
        </div>
        <ButtonNavigate
          isPrev={data?.info.prev}
          isNext={data?.info.next}
          handleClickPreviousButton={() => setPage((prev) => prev - 1)}
          handleClickNextButton={() => setPage((prev) => prev + 1)}
          showing={`Showing ${data?.results[0].id} to ${
            data?.results[data.results.length - 1].id
          } of ${data?.info.count} results`}
        />
      </>
    </div>
  );
};

export { ListOfEpisodes };
