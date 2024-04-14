import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Residents.module.scss";

import { ICharacter } from "../../../interfaces/app.interface";
import CharacterItem from "../Characters/CharacterItem/CharacterItem";

const getResidents = (residents: string) => {
  return axios.get<ICharacter[]>(
    `https://rickandmortyapi.com/api/character/${residents}`
  );
};

type Props = {
  residents: string;
};

const Residents: React.FC<Props> = ({ residents }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["residents", residents],
    queryFn: () => getResidents(residents),
    select: ({ data }) => {
      if (data instanceof Array) return data;
      else return [data];
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.title}>Residents</div>
      <div className={styles.residentsContainer}>
        {data?.map((resident) => (
          <CharacterItem character={resident} key={resident.id} />
        ))}
      </div>
    </div>
  );
};

export { Residents };
