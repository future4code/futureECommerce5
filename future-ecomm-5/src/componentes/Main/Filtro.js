import React from 'react';
import styled from 'styled-components';

const FiltroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
`
export function Filtro(props) {
    return (
        <FiltroContainer>
            <h3>Filtros</h3>
            <input type="number" placeholder="Valor min" onChange={props.onChangeMinValue} />
            <input type="number" placeholder="Valor max" onChange={props.onChangeMaxValue} />
            <input type="text" placeholder="Pesquisa por nome" onChange={props.onChangeNameSearch} />
        </FiltroContainer>
    )
}