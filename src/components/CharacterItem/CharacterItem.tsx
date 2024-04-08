import React from "react";
import styled from "styled-components";
import { ICharacter } from '../../types/app.interface'
import { useNavigate } from "react-router-dom";

type CharacterItemProps = {
  character: ICharacter;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const navigate = useNavigate()

  const handleClick = (character: ICharacter) => {
    console.log(character.name);
    navigate(`character/${character.id}`)
  }

  return (
    <Container onClick={() => handleClick(character)}>
      <TopLine>
        <Avatar src={character.image} alt="Аватар" />
        <InfoContainer>
          <Name>{character.name}</Name>
          <Gender>{character.gender}</Gender>
        </InfoContainer>
      </TopLine>
    </Container>
  );
};

export default CharacterItem;

const Container = styled.div`
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    color: yellow;
    border: 1px solid yellow;
    transform: scale(1.02);
  }
`;

const Name = styled.span`
  font-size: 24px;
`;

const Gender = styled.span`
  font-size: 18px;
`;

const Avatar = styled.img`
  height: 100px;
  width: 100px;
`;

const TopLine = styled.div`
  display: flex;
  gap: 10px;
`;

const InfoContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
`;
