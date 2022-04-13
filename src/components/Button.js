import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    border: 0;
    background-color: ${({bg}) => bg || '#1877F2'};
    color: ${({color}) => color || '#000'};
    border-radius: ${({rad}) => rad || '5px'} ;
    width: ${({wid}) => wid || '40px'};
    height: ${({hei}) => hei || '40px'};
    display: flex;
    justify-content:center;
    align-items: center;
    transition: .3s ease-in-out;

    &:hover {
        background-color: ${({hov}) => hov || 'rgba(0,0,0,.05)'};
    }
`