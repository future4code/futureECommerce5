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
      produtos: [
        {
          nome: "Produto A",
          valor: 200.99
        },
        {
          nome: "Produto B",
          valor: 200.99
        },
        {
          nome: "Produto C",
          valor: 200.99
        },
        {
          nome: "Produto D",
          valor: 200.99
        },
        {
          nome: "Produto E",
          valor: 200.99
        },
        {
          nome: "Produto F",
          valor: 200.99
        },
        {
          nome: "Produto G",
          valor: 200.99
        },
        {
          nome: "Produto H",
          valor: 200.99
        },
      ],
      produtosNoCarrinho: [],
    }
  }

  aparecerCart = () => {
    this.setState ({telaCart: !this.state.telaCart})
  }

  adicionarProdutoAoCarrinho = (nome, valor) => {
    const novoProduto = {
      nome, 
      valor
    }
    const copiaProdutosNoCarrinho = [novoProduto, ...this.state.produtosNoCarrinho]
    this.setState({produtosNoCarrinho: copiaProdutosNoCarrinho})
  }

  render () {
    const telaAtual = this.state.telaCart ? (
      <Carrinho 
        produtosNoCarrinho={this.state.produtosNoCarrinho}
      />
    ) : (<div></div>)
    
    return (
    <div className="App">
      <Header onClickShowCart={this.aparecerCart}/>
        <Body>
          <Filtro />
          <Container
            adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
            produtos={this.state.produtos}
          />
          {telaAtual}
        </Body>
    </div>
    );
  }
}

export default App;
