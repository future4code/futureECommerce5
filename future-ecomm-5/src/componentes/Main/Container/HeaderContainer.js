import React from 'react';
import styled from 'styled-components';

const MainHeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export function HeaderContainer() {
    return (
        <MainHeaderContainer>
            <p>Quantidade de produtos: 8</p>
            <select>
                <option>Ordem crescente</option>
                <option>Ordem decrescente</option>
            </select>
        </MainHeaderContainer>
    )
}