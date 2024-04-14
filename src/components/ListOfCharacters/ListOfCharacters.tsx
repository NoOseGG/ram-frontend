import React, { ChangeEvent, useState } from "react";

import styles from "./ListOfCharacter.module.scss";
import CharacterItem from "../Feed/Characters/CharacterItem/CharacterItem";
import ButtonNavigate from "../Feed/ButtonsNavigate/ButtonNavigate";
import sessionStorageService from "../../services/sessionStorage.service";
import axios from "axios";
import { Select } from "../Feed/Characters/Filters/Select/Select";
import { useQuery } from "@tanstack/react-query";
import { ICharactersResponse } from "../../interfaces/app.interface";

const getCharacters = async (
  page: number,
  name: string,
  gender: string,
  status: string
) => {
  return axios.get<ICharactersResponse>(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&gender=${gender}&status=${status}`
  );
};

const ListOfCharacters: React.FC = () => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["characters", page, query, gender, status],
    queryFn: () => getCharacters(page, query, gender, status),
  });

  const statuses = ["All statuses", "Alive", "Dead", "Unknown"];
  const genders = ["All genders", "Male", "Female", "Genderless ", "Unknown"];

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setQuery(event.target.value);
  };

  const handleChangeSelectGender = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setGender(event.target.value);
  };

  const handleChangeSelectStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setStatus(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <input
          className={styles.search}
          placeholder="Enter name"
          onChange={handleChangeSearch}
        />
        <div className={styles.selectContainer}>
          <Select
            options={statuses}
            handleChangeSelect={handleChangeSelectStatus}
          />
          <Select
            options={genders}
            handleChangeSelect={handleChangeSelectGender}
          />
        </div>
      </div>
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
          handleClickPreviousButton={() => setPage((prev) => prev - 1)}
          handleClickNextButton={() => setPage((prev) => prev + 1)}
          showing={`Showing ${data?.data.results[0].id} to ${
            data?.data.results[data.data.results.length - 1].id
          } of ${data?.data.info.count} results`}
        />
      </>
    </div>
  );
};

export { ListOfCharacters };
