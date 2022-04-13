import styled from 'styled-components';

export const FeedContainer = styled.div`
    flex: .5;
    margin: 0 10%;
`;

export const FeedInput = styled.div`
    background-color: ${({theme}) => theme.bgColors.header};
    border-radius: ${({theme}) => theme.radius.small};
    box-shadow: 1px 2px 3px ${({theme}) => theme.bs.body};
    padding: 10px 15px;
    margin: 10px 20px;

    .feed_top {
        display: flex;
        column-gap: 10px;
        padding: 0 0 15px;
        border-bottom: 1px solid ${({theme}) => theme.bs.body};
    }

    .buttons {
        margin-top: 10px;
        display: flex;
        column-gap: 10px;
    }

    .buttons button {
        display: flex;
        text-align: center;
        column-gap: 5px;
        font-size: 25px;
    }

    .buttons > button > h4 {
        font-size: 14px;
        color: ${({theme}) => theme.fontColors.gray};
    }

    button {
        font-size: 16px;
        padding-left: 20px;
        justify-content: start;
    }
`;

export const FeedSliderContainer = styled.div`
    max-width: 500px;
    height: max-content;

    .slick-slider {
        width: 100%;
        height: 100%;
    }

    .slick-slider > button {
        background-color: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: 1px solid ${({theme}) => theme.fontColors.gray};
        z-index: 2;
        overflow: hidden;
        margin: 0 10px;
        transition: .3s ease-in-out;
    }

    .slick-slider > button:hover {
        background-color: ${({theme}) => theme.bgColors.body};
    }

    .slick-slider > button::before {
        color: ${({theme}) => theme.fontColors.gray};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
    }

    .icon {
        background-color: #fff !important;
        position: absolute;
        display: flex;
        bottom: 5px;
        transform: translateX(30px);
        justify-content: center;
        border-radius: 50% !important;
    }

    .icon > svg {
        color: ${({theme}) => theme.bgColors.green_main}; 
        font-size: 14px;  
    }
`;

export const FeedStoryContainer = styled.div`
    max-width: 550px;
    margin: 10px auto;
    height: max-content;
    overflow: hidden;

    .card {
        height: 150px;
        width: 50px;
        overflow: hidden;
        border-radius: ${({theme}) => theme.radius.small};
        background-color: yellowgreen;
        margin: 0 10px;
    }

    .card > h4 {
        position: absolute;
        bottom: 20px;
        margin-left: 5px;
        font-size: 13px;
        text-transform: capitalize;
        color: #fff !important;
        text-shadow: 0 0 5px ${({theme})=> theme.bs.body};
    }
    
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 0;
        transition: .3s ease-in-out;
    }

    .card:hover > img {
        transform: scale(1.1);
    }

    .slick-slider > button {
        background-color: #fff;
        width: 40px;
        height: 40px;
        border: 1px solid ${({theme}) => theme.fontColors.gray};
        border-radius: ${({theme}) => theme.radius.circle} !important;
        z-index: 5;
    }

    .slick-slider > button::before{
        opacity: 1;
        color: ${({theme}) => theme.fontColors.gray};
    }

    .slick-slider > .slick-prev {
        margin-left: 30px;
    }

    .slick-slider > .slick-next {
        margin-right: 30px;
    }

`;
