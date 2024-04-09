import React from "react";

import styles from "./App.module.scss";

import FeedPage from "./pages/FeedPage";
import AppRouter from "./app/router/AppRouter";

function App() {
  return (
    <div className={styles.container}>
      <AppRouter />
    </div>
  );
}

export default App;
