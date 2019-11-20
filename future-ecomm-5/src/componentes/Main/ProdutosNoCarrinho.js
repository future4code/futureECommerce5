import React from 'react';
import styled from 'styled-components';

const ProdutosNoCarrinhoWrapper = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Item = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export function ProdutosNoCarrinho(props){
    const valores = []
    props.produtosNoCarrinho.map(valorProduto => {
        return [...valores, valorProduto.valor]
    })
    const valorTotal = {}
    return (
        <ProdutosNoCarrinhoWrapper>
            {props.produtosNoCarrinho.map(produto => {
                return <Item>
                    <p>{produto.nome}</p>
                    <p>R$ {produto.valor}</p>
                </Item>
            })}
            <h2>Total: R$ {}</h2>
        </ProdutosNoCarrinhoWrapper>
    )
}