import React from 'react';
import styled from 'styled-components';
import { ProdutosNoCarrinho } from './ProdutosNoCarrinho';


const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    border-left: 1px solid black;
`

const Item = styled.div `
    display: flex;
    align-items: center;
`

export class Carrinho extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (    
            <CartContainer>
                <h2>Carrinho:</h2>
                <ProdutosNoCarrinho />
            </CartContainer>
        );
    }
}
