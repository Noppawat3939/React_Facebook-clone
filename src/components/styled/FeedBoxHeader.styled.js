import styled from 'styled-components';

export const FeedBoxHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    position: relative;

    button > svg {
        font-size: 25px;
    }
`;

export const FeedBoxContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const FeedBoxHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    margin-left: 10px;
    font-size: 14px;

    h4 {
        text-transform: capitalize;
    }

    h5 {
        color: ${({theme}) => theme.fontColors.gray_01};
        font-weight: 400;
    }
    h5 > svg {
        color: ${({theme}) => theme.fontColors.gray};
    }
`;

export const FeedBoxBody = styled.div`
    div {
        display: flex;
        column-gap: 5px;
        padding: 5px;
        border-bottom: 1px solid ${({theme}) => theme.bs.body};
    }

    div > button {
        font-size: 15px;
        column-gap: 10px;
        text-transform: capitalize;
        align-items: center;
    }

    div > button > svg {
        font-size: 20px;
    }

    p {
        font-size: 25px;
        padding-bottom: 5px;
        border-bottom: 1px solid ${({theme}) => theme.bs.body};
    }
`;

export const PostOptions = styled.div`
    position: absolute;
    right: 10px;
    top: 40px;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-shadow: 3px 3px 4px ${({theme}) => theme.bs.body};
    background-color: ${({theme}) => theme.bgColors.header};
    border-radius: ${({theme}) => theme.radius.small};

    button {
        background-color : transparent;
        display: flex;
        align-items: center;
        column-gap: 5px;
        border-radius: ${({theme}) => theme.radius.small};
        padding: 5px;
        margin-bottom: 5px; 
        font-size: 13px;
        transition: .3s ease-in-out;
    }

    button:hover {
        background-color: ${({theme}) => theme.bgColors.hover};
    }
`
export const FeedBoxFooter = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    .container {
        margin-left: 10px;
        padding: 2px;
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: ${({theme}) => theme.radius.normal};
        background-color: ${({theme}) => theme.bgColors.body};
    }

    .container > input {
        background-color: transparent;
        margin-left: 10px;
    }

    .container > input::placeholder {
        color: ${({theme}) => theme.fontColors.gray};
    }

    .container > .buttons {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }

    .container > .buttons > button > svg {
        font-size: 18px;
    }
`