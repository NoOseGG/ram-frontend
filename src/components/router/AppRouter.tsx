import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CharaterInfo from '../pages/ListOfCharacters/components/CharacterItem/CharaterInfo'

const UrlRoutes = {
  HOME: '/',
  CHARACTER: 'character/:id',
}

const AppRouter: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={UrlRoutes.HOME} >
          <Route index element={<MainPage />} />
          <Route path={UrlRoutes.CHARACTER} element={<CharaterInfo />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter