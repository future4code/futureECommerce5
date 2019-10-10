import React from 'react';
import { Filtro } from './componentes/Main/Filtro';
import { Header } from './componentes/Header/Header';
import { Cart } from './componentes/Main/Cart';
import { Container } from './componentes/Main/Container/Container';


function App() {
  return (
    <div className="App">
      <Header />
      <Filtro />
      <Cart />
    </div>
  );
}

export default App;
