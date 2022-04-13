import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 5px 15px;
    background-color: ${({theme}) => theme.bgColors.header};
    box-shadow: 0 2px 4px ${({theme}) => theme.bs.body};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 99;
`
export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: .3;   //! flex-Left

    img {
        transform: scale(1.3);
    }
`;

export const HeaderInput = styled.div`
    background-color: ${({theme}) => theme.bgColors.body};
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px 10px;
    border-radius: ${({theme}) => theme.radius.normal};
    
    input {
        background-color: transparent;
        margin-left: 5px;
        font-size: 15px;
    }

    input::placeholder {
        color: ${({theme}) => theme.fontColors.gray};
    }

    svg {
        color: ${({theme}) => theme.fontColors.gray};
    }
`;

export const HeaderMiddle = styled.div`
    display: flex;
    justify-content: space-evenly;
    column-gap: 5px;
    flex: .4;   //! flex-Mid

    button {
        padding: 5px 0;
    }

    button > svg {
        font-size: 28px;
        color: ${({theme}) => theme.fontColors.gray};
    } 
    
`;

export const HeaderRight = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    column-gap: 2%;
    flex: .3;   //! flex-Right

    button {
        padding: 5px 8px;
    }

    button > p {
        font-size: 13px;
        margin-left: 8px;
        font-weight: 600;
    }

    button > svg {
        font-size: 18px;
    }
`;