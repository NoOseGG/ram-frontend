import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FeedPage from "../../pages/FeedPage/FeedPage";
import { Header } from "../../components/Header/Header";
import CharaterInfo from "../../components/CharacterInfo/CharaterInfo";
import { Landing } from "../../landing/Landing";
import { LocationInfo } from "../../components/LocationInfo/LocationInfo";
import { ListOfCharacters } from "../../components/ListOfCharacters/ListOfCharacters";
import { ListOfLocations } from "../../components/ListOfLocations/ListOfLocations";
import { ListOfEpisodes } from "../../components/ListOfEpisodes/ListOfEpisodes";
import { EpisodeInfo } from "../../components/EpisodeInfo/EpisodeInfo";

const UrlRoutes = {
  HOME: "/",
  CHARACTERS: "/character",
  CHARACTER_INFO: "character/:id",
  LOCATIONS: "/location",
  LOCATION_INFO: "location/:id",
  EPISODES: "/episode",
  EPISODE_INFO: "/episode/:id",
};

const AppRouter: React.FC = () => {
  const landing = (children: React.ReactNode) => (
    <Landing children={children} />
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={UrlRoutes.HOME}>
          <Route index element={landing(<FeedPage />)} />
          <Route
            path={UrlRoutes.CHARACTERS}
            element={landing(<ListOfCharacters />)}
          />
          <Route
            path={UrlRoutes.CHARACTER_INFO}
            element={landing(<CharaterInfo />)}
          />
          <Route
            path={UrlRoutes.LOCATIONS}
            element={landing(<ListOfLocations />)}
          />
          <Route
            path={UrlRoutes.LOCATION_INFO}
            element={landing(<LocationInfo />)}
          />
          <Route
            path={UrlRoutes.EPISODES}
            element={landing(<ListOfEpisodes />)}
          />
          <Route
            path={UrlRoutes.EPISODE_INFO}
            element={landing(<EpisodeInfo />)}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
