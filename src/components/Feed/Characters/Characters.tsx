import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import styles from "./Characters.module.scss";

import CharacterItem from "./CharacterItem/CharacterItem";
import { ICharactersResponse } from "../../../interfaces/app.interface";

const getCharacters = async () => {
  return axios.get<ICharactersResponse>(
    `https://rickandmortyapi.com/api/character/`
  );
};

const Characters: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["characters"],
    queryFn: () => getCharacters(),
  });

  const handleClickShowMore = () => {
    navigate("character/");
  };

  return (
    <div className={styles.container}>
      <>
        <h2 className={styles.title}>Characters</h2>
        <div className={styles.charactersContainer}>
          {data?.data.results.slice(0, 4).map((character, index) => (
            <CharacterItem character={character} key={character.id} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.buttonShowMore}
            onClick={handleClickShowMore}
          >
            Show more
          </button>
        </div>
      </>
    </div>
  );
};

export { Characters };
