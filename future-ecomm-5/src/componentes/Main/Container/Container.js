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
            
        }
    }

render(){
    return (
        <MainContainer>
            <HeaderContainer />
            <CardContainer
                produtos={this.props.produtos}
                // onClickAdicionarCarrinho = {() => { 
                //     this.props.adicionarAoCarrinho(this.props.nomeDoProduto, this.props.valorDoProduto)
                // }}  
                // onClickAdicionarCarrinho={this.props.onClickAdicionarCarrinho} 
                
            />
        </MainContainer>
    )
}
}