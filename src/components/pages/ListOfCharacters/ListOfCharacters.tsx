import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { getCharacters } from "../../../store/slices/characterSlice";
import CharacterItem from "./components/CharacterItem/CharacterItem";

const ListOfCharacters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { results } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(results));
  }, [dispatch, results]);
  return (
    <Container>
      {results.map((item) => (
        <CharacterItem character={item} key={item.id} />
      ))}
    </Container>
  );
};

export default ListOfCharacters;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
