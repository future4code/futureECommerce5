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
            produtoAdicionado: '',
            valorAdicionado: 0,
            produtosNoCarrinho: ['teste'],
        }
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

        console.log(this.state.produtosNoCarrinho);
    }

    render(){
        return (
            <MainCardConteiner>
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[0] ,this.props.valorDoProduto[0])
                    }} 
                    nomeDoProduto={this.props.nomeDoProduto[0]}
                    valorDoProduto={this.props.valorDoProduto[0]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[1] ,this.props.valorDoProduto[1])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[1]}
                    valorDoProduto={this.props.valorDoProduto[1]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[2] ,this.props.valorDoProduto[2])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[2]}
                    valorDoProduto={this.props.valorDoProduto[2]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[3] ,this.props.valorDoProduto[3])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[3]}
                    valorDoProduto={this.props.valorDoProduto[3]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[4] ,this.props.valorDoProduto[4])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[4]}
                    valorDoProduto={this.props.valorDoProduto[4]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[5] ,this.props.valorDoProduto[5])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[5]}
                    valorDoProduto={this.props.valorDoProduto[5]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[6] ,this.props.valorDoProduto[6])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[6]}
                    valorDoProduto={this.props.valorDoProduto[6]} 
                />
                <Card 
                    onClickAdicionarCarrinho={() => { 
                        this.adicionarAoCarrinho(this.props.nomeDoProduto[7] ,this.props.valorDoProduto[7])
                    }}  
                    nomeDoProduto={this.props.nomeDoProduto[7]}
                    valorDoProduto={this.props.valorDoProduto[7]} 
                />
            </MainCardConteiner>
        )
    }
}

