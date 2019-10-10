import React from 'react';
import styled from 'styled-components';

const MainCard = styled.div`
    border: 1px solid black;
    padding: 5px;
`

const Image = styled.img`
    width: 100%;
`

const ButtonAdicionar = styled.div`
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background: orange;
    }
`

export function Card (props) {
    return (
        <MainCard>
           <Image src="https://picsum.photos/200/200" />
           <p>{props.nomeDoProduto}</p>
           <p>{props.valorDoProduto}</p>
           <ButtonAdicionar onClick={props.onClickAdicionarCarrinho}>
           <p>Adicionar ao carrinho</p>
           </ButtonAdicionar>
        </MainCard>
    )
}