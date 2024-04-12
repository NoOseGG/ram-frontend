import React, { useEffect, useState } from "react";

import styles from "./LocationInfo.module.scss";
import { ILocation, ILocationsResponse } from "../../interfaces/app.interface";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Residents } from "../Feed/Residents/Residents";

const getLocation = (id: string | undefined) => {
  return axios.get<ILocation>(`https://rickandmortyapi.com/api/location/${id}`);
};

const LocationInfo: React.FC = () => {
  const { id } = useParams();
  const [residents, setResidents] = useState<string | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ["location", id],
    queryFn: () => getLocation(id),
    select: ({ data }) => data,
  });

  console.log(id);
  

  useEffect(() => {
    if (!!data?.residents.length) {
      const residents = data.residents
        .map((resident) => resident.split("/").pop())
        .join(",");
      setResidents(residents);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{data?.name}</div>
      <div className={styles.text}>
        <span className={styles.field}>Type: </span>
        {data?.type}
      </div>
      <div className={styles.text}>
        <span className={styles.field}>Dimension: </span>
        {data?.dimension}
      </div>
      {residents && <Residents residents={residents} />}
    </div>
  );
};

export { LocationInfo };
