import styled from 'styled-components';

export const PostFormContainer = styled.div`
    position: fixed;
    background-color: ${({theme}) => theme.bgColors.post_bg };
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    form {
        display: flex;
        flex-direction: column;
        background-color: ${({theme}) => theme.bgColors.header};
        box-shadow: 0 3px 8px -1px ${({theme}) => theme.bs.body},
                    0 3px 6px ${({theme}) => theme.bs.body};
        border-radius: ${({theme}) => theme.radius.small};
        max-width: 500px;
        max-height: 400px;
        width: 100%;
        height: 100%;
    }
`;

export const FormHeader = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding: 20px 0;
    border-bottom: 1px solid ${({theme}) => theme.bs.body};

    h3 {
        font-size: 20px;
        text-transform: capitalize;
    }
    
    button {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 24px;
    }
`;

export const FormBody = styled.div`
    padding: 10px 15px;

    textarea {
        width: 100%;
        height: 150px;
        font-size: 22px;
        padding: 5px;
    }
    textarea::placeholder {
        color: ${({theme}) => theme.fontColors.gray};
    }
    textarea:focus::placeholder {
        color: gray;
    }

    button.none,
    button.post {
        width: 100%;
        margin: 10px 0;
        font-size: 16px;
        font-weight: 600;
    }

    button.none {
        cursor: not-allowed;
        opacity: .6;
        background-color: ${({theme}) => theme.bgColors.hover_gray};
        color: ${({theme}) => theme.fontColors.gray};
    }

    button.post {
        opacity: 1;
        cursor: pointer;
    }
`;

export const FormBody_Top = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    margin-bottom: 10px;

    h3 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
    }

    svg {
        font-size: 12px;
        margin: 0 2px;
    }

    button {
        padding: 2px;
    }
`
export const FormBody_Mid = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 10px 5px;
        cursor: pointer;
        border-radius: ${({theme}) => theme.radius.small};
        border: 1px solid ${({theme}) => theme.fontColors.lightgray};
    }

    div > h3 {
        text-transform: capitalize;
        font-size: 14px;
        margin-right: 20px;
    }

    button {
        font-size: 25px;
    }
`;