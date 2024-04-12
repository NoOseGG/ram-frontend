import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import styles from "./CharacterInfo.module.scss";

import { ICharacterInfo } from "../../interfaces/app.interface";
import { Episodes } from "../Feed/Episodes/Episodes";

const getCharacterInfo = (id: string | undefined) => {
  if (id)
    return axios.get<ICharacterInfo>(
      `https://rickandmortyapi.com/api/character/${id}`
    );
};

const CharaterInfo: React.FC = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState<string | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ["characterInfo", id],
    queryFn: () => getCharacterInfo(id),
  });

  useEffect(() => {
    if(!!data?.data?.episode) {
      console.log(111);
      
      setEpisodes(
        data?.data?.episode?.map((episode) => episode.split('/').pop()).join(',')
      )
    }
  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <div className={styles.info}>
          <div className={styles.name}>{data?.data.name}</div>
          <div>
            <span className={styles.field}>Species: </span>
            {data?.data.species}
          </div>
          <div>
            <span className={styles.field}>Status: </span>
            {data?.data.status}
          </div>
          <div>
            <span className={styles.field}>Gender: </span>
            {data?.data.gender}
          </div>
          <div>
            <span className={styles.field}>Origin: </span>
            {data?.data.origin.name}
          </div>
          <div>
            <span className={styles.field}>Location: </span>
            {data?.data.location.name}
          </div>
        </div>
        <img className={styles.avatar} src={data?.data.image} />
      </div>
      {episodes && <Episodes episodes={episodes} />}
      <div></div>
    </div>
  );
};

export default CharaterInfo;
