import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track:hover {
        background-color: ${({theme}) => theme.bgColors.hover};
    }
    ::-webkit-scrollbar-thumb:hover {
        border-radius: 50px !important;
        background-color: ${({theme}) => theme.bgColors.gray};
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        min-height: 100vh;
        max-width: 100%;
        background-color: ${({theme}) => theme.bgColors.body};
    }

    input {
        outline: none;
        border: 0;
        padding: 5px;
    }

    textarea {
        outline: none;
        border: 0;
        resize: none;
    }

    button {
        border: 0;
        cursor: pointer;
    }
`;