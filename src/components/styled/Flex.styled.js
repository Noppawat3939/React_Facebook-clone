import styled from 'styled-components';

export const FlextStyled = styled.div`
    display: flex;
    align-items: ${({ali}) => ali || 'center'};
    justify-content:${({jusc}) => jusc || 'start'} ;
`;