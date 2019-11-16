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
            produtosNoCarrinho: [],
        }
    }

    adicionarAoCarrinho = (nomeProduto, valorProduto) => {
        const produtoAdicionado = {
            nome: nomeProduto,
            valor: valorProduto
        }

        const produtosNoCarrinho = [produtoAdicionado, ...this.state.produtosNoCarrinho];
        
        this.setState({
            produtosNoCarrinho: produtosNoCarrinho,
        })
    }
    

    render(){
        console.log(this.state.produtosNoCarrinho)
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

