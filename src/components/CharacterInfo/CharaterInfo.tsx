import React from "react";
import { useParams } from "react-router-dom";

import styles from "./CharacterInfo.module.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ICharacterInfo } from "../../interfaces/app.interface";

const getCharacterInfo = (id: string | undefined) => {
  if (id) return axios.get<ICharacterInfo>(`https://rickandmortyapi.com/api/character/${id}`)
}

const CharaterInfo: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['characterInfo', id],
    queryFn: () => getCharacterInfo(id),
  })

  return <div className={styles.container}>
    <div className={styles.topInfo}>
      <div className={styles.info}>
        <div className={styles.name}>{data?.data.name}</div>
        <div>{data?.data.species}</div>
      </div>
      <img className={styles.avatar} src={data?.data.image} />
    </div>

  </div>;
};

export default CharaterInfo;
