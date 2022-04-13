import styled from 'styled-components';

export const Img = styled.img`
    width: ${({wid}) => wid || '40px'};
    height: ${({hei}) => hei || '40px'};
    border-radius: ${({rad}) => rad || '50%'};
    object-fit: contain;
    cursor: pointer;
`