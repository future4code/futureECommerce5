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
                <p>2x Item G - <b>X</b></p>
            </Item>
            <h2>Total: R$ 1001.00</h2>
        </div>
    )
}