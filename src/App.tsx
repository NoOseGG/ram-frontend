import React from 'react';
import MainPage from './components/pages/MainPage';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <MainPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`
