import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterItem from "./components/CharacterItem/CharacterItem";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { ICharactersResponse } from "../../../types/app.interface";

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
    <Container>
      <ListCharactersContainer>
        {data && data.data.results.map(character => (
          <CharacterItem character={character} />
        ))}
      </ListCharactersContainer>
      <ButtonContainer>
        {data?.data.info.prev && <ButtonNavigate onClick={handleClickPreviousButton}>Предыдущая страница</ButtonNavigate>}
        {data?.data.info.next && <ButtonNavigate onClick={handleClickNextButton}>Следующая страница</ButtonNavigate>}
      </ButtonContainer>
    </Container>
  );
};

export default ListOfCharacters;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListCharactersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ButtonNavigate = styled.button`
  border: 1px solid #fff;
  font-size: 20px;
  border-radius: 18px;
  color: white;
  background-color: #000;
  margin-bottom: 50px;
  padding: 30px;

  &:hover {
    cursor: pointer;
    color: yellow;
    border: 1px solid yellow;
  }
`;
