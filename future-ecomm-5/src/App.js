import React from 'react';
import styled from 'styled-components';
import { Filtro } from './componentes/Main/Filtro';
import { Header } from './componentes/Header/Header';
import { Carrinho } from './componentes/Main/Carrinho';
import { Container } from './componentes/Main/Container/Container';

const Body = styled.div`
  display: flex;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telaCart: false,
      nomeDoProduto: []
    }
  }

  aparecerCart = () => {
    this.setState ({telaCart: !this.state.telaCart})
  }

  adicionarAoCarrinho = () => {
    
  }

  render () {
    const telaAtual = this.state.telaCart ? (<Carrinho />) : (<div></div>)

    const produtos = {
      nome: ['teste1', 'teste2', 'teste3'],
      valor: 50
    }
    
    return (
    <div className="App">
      <Header onClickShowCart={this.aparecerCart}/>
        <Body>
          <Filtro />
          <Container
           onClickAdicionarCarrinho={this.adicionarAoCarrinho} 
           nomeDoProduto={produtos.nome[1]}
          />
          {telaAtual}
        </Body>
    </div>
    );
  }
}

export default App;
