import React from 'react';
import styled from 'styled-components';


const CartContainer = styled.div`
    border-width: 1px;
    border-style: solid;
    width:100%;
    min-height: 20vh;
    display: flex;
    flex-direction: column; 
`

const Item = styled.div `
    display: flex;
    align-items: center;
`

export function Cart() {
    return (    
        <CartContainer>
            <h2>Carrinho:</h2>
            <Item>
                <p>1x Item C - <b>X</b></p>
            </Item>
            <Item>
                <p>2x Item G - <b>X</b></p>
            </Item>
            <h2>Total: R$ 1001.00</h2>
        </CartContainer>
    );
}
