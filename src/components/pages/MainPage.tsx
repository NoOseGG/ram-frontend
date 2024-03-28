import React from "react";
import styled from "styled-components";
import ListOfCharacters from "./ListOfCharacters/ListOfCharacters";

const MainPage: React.FC = () => {
  return (
    <MainPageContainer>
      <TextContainer>
        <Title>Rick And Morty</Title>
        <Text>coming soon...</Text>
        <ListOfCharacters />
      </TextContainer>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 82px;
`;

const Text = styled.div`
  font-size: 40px;
`;
