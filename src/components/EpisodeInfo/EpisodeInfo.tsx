import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import styles from "./EpisodeInfo.module.scss";

import { IEpisode } from "../../interfaces/app.interface";
import { Episodes } from "../Feed/Episodes/Episodes";
import { Residents } from "../Feed/Residents/Residents";

const getEpisodeInfo = (id: string | undefined) => {
  if (id)
    return axios.get<IEpisode>(`https://rickandmortyapi.com/api/episode/${id}`);
};

const EpisodeInfo: React.FC = () => {
  const { id } = useParams();
  const [residents, setResidents] = useState<string | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ["characterInfo", id],
    queryFn: () => getEpisodeInfo(id),
  });

  useEffect(() => {
    if (!!data?.data.characters.length) {
      const residents = data.data.characters
        .map((resident) => resident.split("/").pop())
        .join(",");
      setResidents(residents);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.topInfo}>
        <div className={styles.info}>
          <div className={styles.name}>{data?.data?.name}</div>
          <div>
            <span className={styles.field}>Air date: </span>
            {data?.data?.air_date}
          </div>
          <div>
            <span className={styles.field}>Episode: </span>
            {data?.data?.episode}
          </div>
        </div>
      </div>
      {residents && <Residents residents={residents} />}
      <div></div>
    </div>
  );
};

export { EpisodeInfo };
