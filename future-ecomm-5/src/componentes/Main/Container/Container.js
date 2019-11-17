import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from './HeaderContainer';
import { CardContainer } from './CardContainer';

const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
`

export class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            produtoNome: "",
            produtoValor: 0
        }
    }

    adicionarProdutoAoCarrinho = (nome, valor) => {
        this.setState({produtoNome: nome, produtoValor: valor})
        console.log(this.state.produtoValor, this.state.produtoNome)
    }

    render(){
        return (
            <MainContainer>
                <HeaderContainer />
                <CardContainer
                    produtos={this.props.produtos}
                    adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
                />
            </MainContainer>
        )
    }
}