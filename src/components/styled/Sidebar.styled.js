import styled from 'styled-components';

export const SidebarContainer = styled.div`
    flex: .25;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
`;

export const SidebarOverflow = styled.div`
    overflow-y: auto;
    margin: 0 5px 10px;
    max-height: 50%;
    height: 100%;
    padding: 15px 0 10px;

    div {
        margin-bottom: 10px;
        padding: 5px;
        border-radius: ${({theme}) => theme.radius.small};
        transition: .3s ease-in-out;
        cursor: pointer;
    }

    div > img {
        margin-right: 10px;
    }

    div:first-child > img {
        border-radius: 50%;
        width: 35px;
        height: 35px;
    }

    span > h4 {
        font-size: 13px;
        text-transform: capitalize;
        margin-bottom: 3px;
    }

    span > h6 {
        font-size: 11px;
        font-weight: 500;
        color: ${({theme}) => theme.fontColors.facebook};
    }

    div:hover {
        background-color: ${({theme}) => theme.bgColors.hover};
    }
`;