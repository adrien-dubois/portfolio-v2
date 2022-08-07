import styled from 'styled-components';
import 'animate.css';

export const Div = styled.div`
    width: 100%;
    will-change: contents;
    height: 90%;
    min-height: 566px;
    position: absolute;
    opacity: 0;
    top: 5%;
    margin: 0 auto;
    z-index: 1;
    transform-style: preserve-3d;
    animation: fadeIn 1s forwards;
    animation-delay: 1s;

    .text-zone{
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 40%;
        max-height: 90%;
    }

    h1{
        color: #FFF;
        font-family: var(--roboto-font);
        font-weight: 500;
        font-size: 53px;
        margin: 0;

        &::before{
            content: '<h1>';
            font-family: var(--aurore-font);
            color: var(--primary-color);
            font-size: 1.1rem;
            position: absolute;
            margin-top: -40px;
            left: 15px;
            opacity: 0.6;
        }

        &::after{
            content: '</h1>';
            font-family: var(--aurore-font);
            color: var(--primary-color);
            font-size: 1.1rem;
            position: absolute;
            margin-top: 18px;
            margin-left: 20px;
            opacity: 0.6;
            animation: fadeIn 1s 1.7s backwards;
        }

        img{
            width: 50px;
            margin-left: 20px;
        }
    }
`;