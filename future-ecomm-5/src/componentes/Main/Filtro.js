import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    border-right: 1px solid black;
`

const Inputs = styled.input`
    margin: 20px;
`


export function Filtro(props) {
    return (
        <FiltroContainer>
            <h2>Filtros</h2>
            <Inputs type="number" placeholder="Valor min" onChange={props.onChangeMinValue} />
            <Inputs type="number" placeholder="Valor max" onChange={props.onChangeMaxValue} />
            <Inputs type="text" placeholder="Pesquisa por nome" onChange={props.onChangeNameSearch} />
        </FiltroContainer>
    )
}