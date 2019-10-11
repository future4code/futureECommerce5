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
      produtoAdicionado: '',
      valorAdicionado: 0,
      produtosNoCarrinho: props.produtosNoCarrinho,
    }
  }

  aparecerCart = () => {
    this.setState ({telaCart: !this.state.telaCart})
  }

  adicionarAoCarrinho = (produtoDoCard, valorDoCard) => {
    this.setState({
        produtoAdicionado: produtoDoCard
    })

    this.setState({
        valorAdicionado: valorDoCard
    })

    const nomeDoProduto = produtoDoCard;
    const valorDoProduto = valorDoCard;

    const valoresDoProduto = {
        nome: nomeDoProduto,
        valor: valorDoProduto
    }

    const arrayDosProdutos = [valoresDoProduto, ...this.state.produtosNoCarrinho];

    this.setState({
        produtosNoCarrinho: arrayDosProdutos,
    })
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
           onClickAdicionarCarrinho={() => { 
            this.adicionarAoCarrinho(this.nomeDoProduto ,this.valorDoProduto)
          }} 
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
