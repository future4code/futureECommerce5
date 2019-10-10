import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const MainCardConteiner = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
`

export function CardContainer() {
    return (
        <MainCardConteiner>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </MainCardConteiner>
    )
}