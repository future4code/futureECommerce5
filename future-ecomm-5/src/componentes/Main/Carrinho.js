import React from 'react';
import styled from 'styled-components';


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

export function Carrinho(props) {

    return (    
        <CartContainer>
            <h2>Carrinho:</h2>
            <Item>
                <p>1x C - <b>X</b></p>
            </Item>
            <Item>
                <p>2x Item G - <b>X</b></p>
            </Item>
            <h2>Total: R$ 1001.00</h2>
        </CartContainer>
    );
}
