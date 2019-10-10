import React from 'react';
import styled from 'styled-components';
import { Filtro } from './componentes/Main/Filtro';
import { Header } from './componentes/Header/Header';
import { Cart } from './componentes/Main/Cart';
import { Container } from './componentes/Main/Container/Container';

const FiltroEContainer = styled.div`
  display: flex;
`


function App() {
  return (
    <div className="App">
      <Header />
      <FiltroEContainer>
        <Filtro />
        <Container />
      </FiltroEContainer>
      <Cart />
    </div>
  );
}

export default App;
