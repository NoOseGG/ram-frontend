import React, { useState } from 'react'
import { IEpisodesResponse } from '../../../interfaces/app.interface';
import axios from 'axios';

const getEpisodes = async (page: number) => {
  return axios.get<IEpisodesResponse>(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
};

const Episodes: React.FC = () => {
  const [page, setPage] = useState(1);
  
  return (
    <div>Episodes</div>
  )
}

export { Episodes }