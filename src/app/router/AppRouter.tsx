import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FeedPage from '../../pages/FeedPage'
import CharaterInfo from '../../components/Feed/CharacterInfo/CharaterInfo'

const UrlRoutes = {
  HOME: '/',
  CHARACTER: 'character/:id',
}

const AppRouter: React.FC = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={UrlRoutes.HOME} >
          <Route index element={<FeedPage />} />
          <Route path={UrlRoutes.CHARACTER} element={<CharaterInfo />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter