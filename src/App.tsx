import React from 'react';
import FeedPage from './pages/FeedPage';
import styled from 'styled-components';
import AppRouter from './app/router/AppRouter';

function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`
