import React from "react";

import styles from './CharacterItem.module.scss'

import { ICharacter } from '../../../types/app.interface'
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
    <div className={styles.container} onClick={() => handleClick(character)}>
      <img className={styles.avatar} src={character.image} alt="Аватар" />
      <div className={styles.textContainer}>
        <span className={styles.text}>{character.name}</span>
        <span className={styles.text}>{character.gender}</span>
      </div>
    </div>
  );
};

export default CharacterItem;
