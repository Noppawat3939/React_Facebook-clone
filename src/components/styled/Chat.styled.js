import styled from 'styled-components';

export const ChatContainer = styled.div`
    flex: .25;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
`
export const ChatOverflow = styled.div`
    margin: 10px 5px;
    max-height: 50%;
    height: 100%;
`
export const ChatHeader = styled.div`
    border-bottom: 1px solid ${({theme}) => theme.bs.body};
    padding-bottom:10px; 

    div {
        transition: .3s ease-in-out;
        padding: 5px;
        border-radius: ${({theme}) => theme.radius.small};
    }

    div:hover:not(:first-child) {
        cursor: pointer;
        background-color: ${({theme}) => theme.bgColors.hover};
    }

    h3 {
        color: ${({theme}) => theme.fontColors.gray};
        font-size: 15px;
        text-transform: capitalize;
    }

    h4 {
        font-size: 13px;
        font-weight: 500;
        margin-left: 10px;
        color: ${({theme}) => theme.fontColors.gray_01};
    }
    div > svg {
        font-size: 18px;
        color: ${({theme}) => theme.fontColors.gray_01};
    }
`;

export const ChatTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    h3 {
        color: ${({theme}) => theme.fontColors.gray};
        font-size: 15px;
        text-transform: capitalize;
    }

    button {
        margin: 0 5px;
        font-size: 16px;
    }
`;

export const ContactContainer = styled.div`
    max-width: 100%;
    width: 100%;
    margin: 0 auto 5px;
    display: flex;
    align-items: center;
    transition: .3s ease-in-out;
    cursor: pointer;
    position: relative;
    padding: 5px 10px;
    border-radius: ${({theme}) => theme.radius.small};

    div {
        position: relative;
    }

    .icon {
        background-color: #fff !important;
        width: fit-content;
        height: fit-content;
        display: flex;
        border-radius: 50% !important;
        position: absolute;
        z-index: 1;
        bottom: 0;
        right: 0;
    }

    .icon > svg {
        color: ${({theme}) => theme.bgColors.green_main};
        font-size: 13px;
    }
    
    h4 {
        text-transform: capitalize;
        font-size: 14px;
        margin-left: 15px;
    }

    &:hover {
        background-color: ${({theme}) => theme.bgColors.hover};
    }

    &:hover > .hover {
        opacity: 1;
        visibility: visible;
    }

    .hover {
        position: absolute;
        left: -120%;
        opacity: 0;
        visibility: hidden;
        transition: .2s ease-in-out;
    }
`;

export const ContactInfo = styled.div`
    z-index: 2;
    padding: 20px;

    img {
        margin-right: 20px;
    }

    .info {
        display: flex;
        flex-direction: column;
        text-align: start;
    }

    .info > h4 {
        font-size: 24px;
        margin-left: -5px;
        margin-bottom: 10px;
    }

    p {
        font-size: 15px;
        margin-left: 10px;
    }

    svg {
        color: ${({theme})=> theme.fontColors.gray};
        font-size: 24px;
    }

    .icon {
        background-color: #fff !important;
        display: flex;
        border-radius: 50% !important;
        position: absolute;
        bottom: 10%;
        left: 25%;
        z-index: 1;
    }

    .icon > svg {
        color: ${({theme}) => theme.bgColors.green_main};
        font-size: 25px;
    }
`