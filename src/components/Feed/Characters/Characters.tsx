import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Characters.module.scss";

import CharacterItem from "./CharacterItem/CharacterItem";
import { ICharactersResponse } from "../../../interfaces/app.interface";
import sessionStorageService from "../../../services/sessionStorage.service";
import { log } from "console";
import ButtonNavigate from "../ButtonsNavigate/ButtonNavigate";

const getCharacters = async (page: number, name: string, gender: string) => {
  return axios.get<ICharactersResponse>(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}`
  );
};

const ListOfCharacters: React.FC = () => {
  const [isShowMore, setIsShowMore] = useState(sessionStorageService.getItem());
  const [gender, setGender] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["characters", page, query, gender],
    queryFn: () => getCharacters(page, query, gender),
  });

  const options = ["Male", "Female", "Genderless ", "Unknown"];

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickPreviousButton = () => {
    setPage((prev) => prev - 1);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setQuery(event.target.value);
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setGender(event.target.value);
  };

  const handleClickShowMore = () => {
    sessionStorageService.setItem();
    setIsShowMore("true");
  };

  const handleClickHideMore = () => {
    sessionStorageService.removeItem();
    setIsShowMore(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <input
          className={styles.search}
          placeholder="Enter name"
          onChange={handleChangeSearch}
        />
        <select
          className={styles.select}
          onChange={handleChangeSelect}
          aria-placeholder="Choose gender"
        >
          <option value={""}>All genders</option>
          {options.map((item) => (
            <option value={item.toLowerCase()}>{item}</option>
          ))}
        </select>
      </div>
      {isShowMore ? (
        <>
          <div className={styles.charactersContainer}>
            {data &&
              data.data.results.map((character) => (
                <CharacterItem character={character} key={character.id} />
              ))}
          </div>
          <ButtonNavigate
            isPrev={data?.data.info.prev}
            isNext={data?.data.info.next}
            handleClickPreviousButton={handleClickPreviousButton}
            handleClickNextButton={handleClickNextButton}
            handleClickMoreButton={handleClickHideMore}
          />
        </>
      ) : (
        <>
          <div className={styles.charactersContainer}>
            {data?.data.results.slice(0, 4).map((character, index) => (
              <CharacterItem character={character} key={character.id} />
            ))}
          </div>
          <button
            className={styles.buttonShowMore}
            onClick={handleClickShowMore}
          >
            Show more
          </button>
        </>
      )}
    </div>
  );
};

export default ListOfCharacters;
