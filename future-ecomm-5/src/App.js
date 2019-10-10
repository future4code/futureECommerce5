import React from 'react';
import styled from 'styled-components';
import { Filtro } from './componentes/Main/Filtro';
import { Header } from './componentes/Header/Header';
import { Cart } from './componentes/Main/Cart';
import { Container } from './componentes/Main/Container/Container';

const Body = styled.div`
  display: flex;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telaCart: false,
    }
  }

  aparecerCart = () => {
    this.setState ({telaCart: !this.state.telaCart})
  }

  render () {
    const telaAtual = this.state.telaCart ? (<Cart />) : (<div></div>)
    
    return (
    <div className="App">
      <Header onClickShowCart={this.aparecerCart}/>
        <Body>
          <Filtro />
          <Container />
          {telaAtual}
        </Body>
    </div>
    );
  }
}

export default App;
