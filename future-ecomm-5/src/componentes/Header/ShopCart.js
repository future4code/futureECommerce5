import React from 'react';
import CartImage from '../Header/shopping-cart.svg';
import styled from 'styled-components';

const Image = styled.img`
    width: 50px;
    height: 50px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 50%;
`

const ImageContainer = styled.div`
`
export function ShopCart(props) {
    return (
        <ImageContainer>
           <Image src={CartImage} onClick={props.onClickShowCart} /> 
        </ImageContainer>
    )
}