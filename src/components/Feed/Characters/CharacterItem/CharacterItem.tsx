import React from "react";

import styles from "./CharacterItem.module.scss";

import { ICharacter } from "../../../../interfaces/app.interface";
import { useNavigate } from "react-router-dom";
import { AliveBudge } from "../../AliveBudge/AliveBudge";
import { stat } from "fs";

type CharacterItemProps = {
  character: ICharacter;
};

const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
  const navigate = useNavigate();

  const handleClick = (character: ICharacter) => {
    console.log(character.name);
    navigate(`character/${character.id}`);
  };

  const getAliveColor = (status: string): string => {
    switch (status) {
      case "Alive":
        return "green";
      case "Dead":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div className={styles.container} onClick={() => handleClick(character)}>
      <img className={styles.avatar} src={character.image} alt="Аватар" />
      <div className={styles.textContainer}>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <AliveBudge backgroundColor={getAliveColor(character.status)} />
          <span className={styles.title}>{character.name}</span>
        </div>
        <span className={styles.text}>{character.species}</span>
      </div>
    </div>
  );
};

export default CharacterItem;
