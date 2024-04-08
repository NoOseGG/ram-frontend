import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import * as S from './ListOfCharacters.styles'

import CharacterItem from "./CharacterItem/CharacterItem";
import { ICharactersResponse } from "../types/app.interface";

const getCharacters = async (page: number) => {
  return axios.get<ICharactersResponse>(`https://rickandmortyapi.com/api/character/?page=${page}`)
}

const ListOfCharacters: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading } = useQuery({ queryKey: ['characters', page], queryFn: () => getCharacters(page) })

  const handleClickNextButton = () => {
    setPage(prev => prev + 1)
  }

  const handleClickPreviousButton = () => {
    setPage(prev => prev - 1)
  }

  return (
    <S.Container>
      <S.ListCharactersContainer>
        {data && data.data.results.map(character => (
          <CharacterItem character={character} />
        ))}
      </S.ListCharactersContainer>
      <S.ButtonContainer>
        {data?.data.info.prev && <S.ButtonNavigate onClick={handleClickPreviousButton}>Предыдущая страница</S.ButtonNavigate>}
        {data?.data.info.next && <S.ButtonNavigate onClick={handleClickNextButton}>Следующая страница</S.ButtonNavigate>}
      </S.ButtonContainer>
    </S.Container>
  );
};

export default ListOfCharacters;
