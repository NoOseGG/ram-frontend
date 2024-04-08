import React, { Children } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import FeedPage from "../../pages/FeedPage";
import { Header } from "../../components/Header/Header";
import CharaterInfo from "../../components/Feed/CharacterInfo/CharaterInfo";
import { Landing } from "../../landing/Landing";

const UrlRoutes = {
  HOME: "/",
  CHARACTER: "character/:id",
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
            path={UrlRoutes.CHARACTER}
            element={landing(<CharaterInfo />)}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
