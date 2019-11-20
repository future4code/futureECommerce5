import React from 'react';
import styled from 'styled-components';

const Item = styled.div `
    display: flex;
    align-items: center;
`

export function ProdutosNoCarrinho(props){
    return (
        <div>
            <Item>
                <p>Teste<b>X</b></p>
            </Item>
            <Item>
                <p>{props.produto}<b>X</b></p>
            </Item>
            <h2>Total: R$ {props.valor}</h2>
        </div>
    )
}