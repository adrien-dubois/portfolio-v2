import styled, { css } from 'styled-components';
import 'animate.css';

function createCSS() {
    let styles = '';
  
    for (let i = 1; i < 42; i += 1) {
       styles += `
       .text-animate._${i} {
            animation-delay: ${i / 10}s;
        }
       `
    }
  
    return css`${styles}`;
  }


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

    @media screen and (max-width: 1200px) {
        position: initial;
        height: auto;
        min-height: auto;
    }

    .text-zone{
        position: absolute;
        left: 10%;
        top: 50%;
        transform: translateY(-50%);
        width: 40%;
        max-height: 90%;

        @media screen and (max-width: 1200px) {
            position: initial;
            width: 100%;
            transform: none;
            padding: 10px;
            box-sizing: border-box;
        }
    }

    h1{
        color: #FFF;
        font-family: var(--roboto-font);
        font-weight: 500;
        font-size: 53px;
        margin: 0;

        @media screen and (max-width: 1200px) {
            color: var(--primary-color);
            font-size: 45px;
        }

        &::before{
            content: '<h1>';
            font-family: var(--aurore-font);
            color: var(--primary-color);
            font-size: 1.1rem;
            position: absolute;
            margin-top: -40px;
            left: 15px;
            opacity: 0.6;

            @media screen and (max-width: 1200px) {
                display: none;
            }
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

            @media screen and (max-width: 1200px) {
                display: none;
            }
        }

        img{
            width: 50px;
            margin-left: 20px;
            opacity: 0;
            height: auto;
            animation: rotateIn 1s linear both;
            animation-delay: 1.4s;
        }
    }

    h2{
        color: #8d8d8d;
        margin-top: 20px;
        font-weight: 400;
        font-size: 11px;
        font-family: sans-serif;
        letter-spacing: 3px;
        animation: fadeIn 1s 1.8s backwards;
    }

    .flat-button{
        color: var(--primary-color);
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 4px;
        font-family: sans-serif;
        padding: 10px 18px;
        border: 1px solid var(--primary-color);
        margin-top: 25px;
        float: left;
        animation: fadeIn 1s 1.8s backwards;
        white-space: nowrap;

        &:hover{
            background: var(--primary-color);
            color: #333;
        }

        @media screen and (max-width: 1200px) {
            float: none;
            display: block;
            margin: 20px auto 0 auto;
            width: 165px;
        }
    }

    .text-animate{
        display: inline-block;
        opacity: 0;
        animation: bounceIn 1s 1s;
        animation-fill-mode: forwards;
        min-width: 10px;
        cursor: default;
    }

    .text-animate-hover{
        min-width: 10px;
        display: inline-block;
        animation-fill-mode: both;
        cursor: default;

        &:hover{
            animation: rubberBand 1s;
            color: var(--primary-color);
        }
    }
    
    ${createCSS()};

`;

