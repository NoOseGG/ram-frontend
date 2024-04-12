import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./CharacterInfo.module.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICharacterInfo, IEpisode } from "../../interfaces/app.interface";
import { EpisodeItem } from "../Feed/Episodes/EpisodeItem/EpisodeItem";
import { log } from "console";

const getCharacterInfo = (id: string | undefined) => {
  if (id) return axios.get<ICharacterInfo>(`https://rickandmortyapi.com/api/character/${id}`)
}

const CharaterInfo: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['characterInfo', id],
    queryFn: () => getCharacterInfo(id),
  })

  console.log(JSON.stringify(data?.data));

  const dataEpisodes = data?.data.episode.map(item => item.split('/').pop())
  console.log(JSON.stringify(dataEpisodes?.join(',')));

  return <div className={styles.container}>
    <div className={styles.topInfo}>
      <div className={styles.info}>
        <div className={styles.name}>{data?.data.name}</div>
        <div><span className={styles.field}>Species: </span>{data?.data.species}</div>
        <div><span className={styles.field}>Status: </span>{data?.data.status}</div>
        <div><span className={styles.field}>Gender: </span>{data?.data.gender}</div>
        <div><span className={styles.field}>Origin: </span>{data?.data.origin.name}</div>
        <div><span className={styles.field}>Location: </span>{data?.data.location.name}</div>
      </div>
      <img className={styles.avatar} src={data?.data.image} />
    </div>
    <div>
      
    </div>
  </div>;
};

export default CharaterInfo;
