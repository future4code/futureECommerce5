import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';


const MainCardConteiner = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`

export class CardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    adicionarAoCarrinho = (nome, valor) => {
        this.props.adicionarProdutoAoCarrinho(nome, valor)
    }

    render () {
        return (
            <MainCardConteiner>
                {this.props.produtos.map(produto => {
                return <Card 
                    onClickAdicionarCarrinho={ () => { 
                        this.adicionarAoCarrinho(produto.nome, produto.valor)
                    }} 
                    nomeProduto={produto.nome}
                    valorProduto={produto.valor} 
                />
                })}
            </MainCardConteiner>
        )
    }
}

