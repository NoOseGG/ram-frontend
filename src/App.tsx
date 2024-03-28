import React from 'react';
import MainPage from './components/pages/MainPage';
import styled from 'styled-components';
import AppRouter from './components/router/AppRouter';

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
