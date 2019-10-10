import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const MainCardConteiner = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`

export function CardContainer(props) {
    return (
        <MainCardConteiner>
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[0]}
                valorDoProduto={props.valorDoProduto[0]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[1]}
                valorDoProduto={props.valorDoProduto[1]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[2]}
                valorDoProduto={props.valorDoProduto[2]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[3]}
                valorDoProduto={props.valorDoProduto[3]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[4]}
                valorDoProduto={props.valorDoProduto[4]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[5]}
                valorDoProduto={props.valorDoProduto[5]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[6]}
                valorDoProduto={props.valorDoProduto[6]} 
            />
            <Card 
                onClickAdicionarCarrinho={props.onClickAdicionarCarrinho} 
                nomeDoProduto={props.nomeDoProduto[7]}
                valorDoProduto={props.valorDoProduto[7]} 
            />
        </MainCardConteiner>
    )
}