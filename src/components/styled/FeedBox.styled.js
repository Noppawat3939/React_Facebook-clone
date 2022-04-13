import styled from 'styled-components';

export const FeedBox = styled.div`
    margin: 20px;
    padding:  10px 20px;
    background-color: ${({theme}) => theme.bgColors.header};
    box-shadow: 0 1px 3px 1px ${({theme}) => theme.bs.body};
    border-radius: ${({theme}) => theme.radius.small};
`;
