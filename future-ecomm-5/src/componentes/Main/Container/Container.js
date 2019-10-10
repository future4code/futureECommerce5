import React from 'react';
import styled from 'styled-components';
import { HeaderContainer } from './HeaderContainer';
import { CardContainer } from './CardContainer';

const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
`

export function Container() {
    return (
        <MainContainer>
            <HeaderContainer />
            <CardContainer />
        </MainContainer>
    )
}