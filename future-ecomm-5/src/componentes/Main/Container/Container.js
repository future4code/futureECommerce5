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
            produtosNoCarrinho: props.produtosNoCarrinho,
        }
    }

    render(){
        
        return (
            <MainContainer>
                <HeaderContainer />
                <CardContainer 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto ,this.props.valorDoProduto)
                    }}
                    nomeDoProduto={this.props.nomeDoProduto}
                    valorDoProduto={this.props.valorDoProduto} 
                />
            </MainContainer>
        )
    }
}