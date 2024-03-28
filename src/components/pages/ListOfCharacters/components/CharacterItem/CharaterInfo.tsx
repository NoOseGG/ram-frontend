import React from 'react'
import { useParams } from 'react-router-dom'

const CharaterInfo: React.FC = () => {
const { id } = useParams();

  return (
    <div>CharaterInfo {id}</div>
  )
}

export default CharaterInfo