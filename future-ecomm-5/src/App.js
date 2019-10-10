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
      produtos: ["Produto A", "Produto B", "Produto C", "Produto D", "Produto E", "Produto F", "Produto G", "Produto H"],
      valores: [200.99, 500.99, 600.99, 600.99, 1000.99, 1500.99, 2000.99, 9999.99],
    }
  }

  aparecerCart = () => {
    this.setState ({telaCart: !this.state.telaCart})
  }

  adicionarAoCarrinho = () => {
    // O que pensei a partir de agora:
    // Criar um array no estado que armazene os nomes dos produtos a medida em que 
    // o botão "adicionar ao carrinho" ir sendo clicado, e fazer com que esse array seja 
    // reproduzido no carrinho. Quanto aos valores, criar um array de valores e fazer
    // a sua soma. 
  }

  

  render () {
    const telaAtual = this.state.telaCart ? (<Carrinho />) : (<div></div>)
    const nomeDoProduto = this.state.produtos
    const valorDoProduto = this.state.valores
    
    return (
    <div className="App">
      <Header onClickShowCart={this.aparecerCart}/>
        <Body>
          <Filtro />
          <Container
           onClickAdicionarCarrinho={this.adicionarAoCarrinho} 
           nomeDoProduto={nomeDoProduto}
           valorDoProduto={valorDoProduto}
          />
          {telaAtual}
        </Body>
    </div>
    );
  }
}

export default App;
