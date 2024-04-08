import React from 'react'

import styles from './Feed.module.css';

import rick from '../../assets/rick.png';
import morty from '../../assets/morty.png';
import ListOfCharacters from './ListOfCharacters/ListOfCharacters';

const Feed: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <img src={morty} alt="morty" />
        <div className={styles.title}>Rick And Morty</div>
        <img src={rick} alt="rick" />
      </div>
      <ListOfCharacters />
    </div>
  )
}

export { Feed }