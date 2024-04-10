import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from "./Characters.module.scss";

import CharacterItem from "./CharacterItem/CharacterItem";
import { ICharactersResponse } from "../../../interfaces/app.interface";
import sessionStorageService from "../../../services/sessionStorage.service";
import { log } from "console";

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

  useEffect(() => {
    console.log(`${query} ${gender} ${page}`);
  }, [query, gender, page]);

  const handleClickNextButton = () => {
    setPage((prev) => prev + 1);
  };

  const handleClickPreviousButton = () => {
    setPage((prev) => prev - 1);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
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

  useEffect(() => {
    console.log(data?.data.info.next);
    console.log(data?.data.info.prev);
  }, [data]);

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
          <div className={styles.buttonsContainer}>
            {data?.data.info.prev ? (
              <button
                className={styles.buttonNavigate}
                onClick={handleClickPreviousButton}
              >
                Previous page
              </button>
            ) : (
              <div style={{ width: 200 }}></div>
            )}
            <button
              className={styles.buttonShowMore}
              onClick={handleClickHideMore}
            >
              Hide more
            </button>
            {data?.data.info.next ? (
              <button
                className={styles.buttonNavigate}
                onClick={handleClickNextButton}
              >
                Next page
              </button>
            ) : (
              <div style={{ width: 200 }}></div>
            )}
          </div>
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
