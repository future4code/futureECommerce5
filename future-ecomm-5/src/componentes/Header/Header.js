import React from 'react';
import styled from 'styled-components';
import { ShopCart } from './ShopCart';

const HeaderContainer = styled.div `
    background-color: orange;
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: space-around; 
`

export function Header (props) {
    return (
        <HeaderContainer>
            <h1>E-Commerce5</h1>
            <ShopCart onClickShowCart={props.onClickShowCart} />
        </HeaderContainer>
    );
}
