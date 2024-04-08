import React from "react";
import styled from "styled-components";

import * as S from './FeedPage.styles';
import rick from '../assets/rick.png';
import morty from '../assets/morty.png';

const FeedPage: React.FC = () => {
  return (
    <S.FeedPageContainer>
      <S.TextContainer>
        <img src={morty} alt="morty" />
        <S.Title>Rick And Morty</S.Title>
        <img src={rick} alt="rick" />
      </S.TextContainer>
    </S.FeedPageContainer>
  );
};

export default FeedPage;


