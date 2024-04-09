import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import styles from './ListOfCharacters.module.scss';

import CharacterItem from "../CharacterItem/CharacterItem";
import { ICharactersResponse } from "../../../types/app.interface";

const getCharacters = async (page: number) => {
  return axios.get<ICharactersResponse>(`https://rickandmortyapi.com/api/character/?page=${page}`)
}

const ListOfCharacters: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery({ queryKey: ['characters', page], queryFn: () => getCharacters(page) })

  const options = ['Male', 'Female', 'Unknown'];

  const handleClickNextButton = () => {
    setPage(prev => prev + 1)
  }

  const handleClickPreviousButton = () => {
    setPage(prev => prev - 1)
  }

  useEffect(() => {
    console.log(data?.data.info.next);
    console.log(data?.data.info.prev);

  }, [data])

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <input className={styles.search} placeholder="Enter name" />
        <select className={styles.select}>
          {options.map(item => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className={styles.charactersContainer}>
        {data && data.data.results.map(character => (
          <CharacterItem character={character} key={character.id} />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        {data?.data.info.prev ? <button className={styles.buttonNavigate} onClick={handleClickPreviousButton}>Предыдущая страница</button> : <div></div>}
        {data?.data.info.next && <button className={styles.buttonNavigate} onClick={handleClickNextButton}>Следующая страница</button>}
      </div>
    </div>
  );
};

export default ListOfCharacters;
