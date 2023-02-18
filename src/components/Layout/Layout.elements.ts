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

export const App = styled.div`

    .page{
        width: 100%;
        height: 100%;
        position: absolute;

        @media screen and (max-width: 1200px) {
            position: initial;
        }
    }

    .top-tags{
        bottom: auto;
        top: 35px;
    }

    .tags{
        color: var(--primary-color);
        opacity: 0.6;
        position: absolute;
        bottom: 0;
        left: 120px;
        font-size: 18px;
        font-family: var(--aurore-font);
        margin-bottom: 1.5rem;

        @media screen and (max-width: 1200px) {
            display: none;
        }
    }

    .bottom-tag-html{
        margin-left: -20px;
    }

`;

export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    .container{
        overflow-x: hidden;
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
    }

    .skill-page{
        overflow-y: hidden;
    }

    .about-page,
    .contact-page,
    .portfolio-page,
    .skill-page{

        h1{
            color: var(--primary-color);
            font-family: var(--coolvetica);
            font-size: 65px;
            line-height: 63px;
            font-weight: 400;
            margin-top: 0;
            position: relative;
            margin-bottom: 40px;
            left: 10px;

            @media screen and (max-width: 1200px) {
                font-size: 40px;
            }

            &::before{
                content: '<h1>';
                font-family: var(--aurore-font);
                font-size: 18px;
                position: absolute;
                margin-top: -20px;
                left: -10px;
                opacity: 0.6;
                line-height: 18px;
            }

            &::after{
                content: '</h1>';
                font-family: var(--aurore-font);
                font-size: 18px;
                position: absolute;
                bottom: -20px;
                margin-left: 20px;
                left: -30px;
                opacity: 0.6;
                line-height: 18px;
            }

        
        }

        p{
            font-family: sans-serif;
            font-style: 13px;
            color: var(--white-color);
            font-weight: 300;
            min-width: fit-content;
            animation: pulse 1s;

            @media screen and (max-width: 1200px) {
                font-size: .9rem;
            }

            &:nth-of-type(1){
                animation-delay: 1.1s;
            }

            &:nth-of-type(2){
                animation-delay: 1.2s;
            }

            &:nth-of-type(3){
                animation-delay: 1.3s;
            }
        }

        .text-zone{
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
            width: 35%;
            vertical-align: middle;
            display: table-cell;
            max-height: 90%;

            @media screen and (max-width: 1200px) {
                position: initial;
                transform: none;
                width: 100%;
                display: block;
                padding: 20px;
                box-sizing: border-box;
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
                color: var(--white-color);
            }
        }
    }

    .portfolio-page{
        padding-left: 100px;
        padding-right: 50px;
        width: calc(100% - 150px);
        position: initial;
        height: 100%;
        overflow: auto !important;

        @media screen and (max-width: 1200px) {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
        }

        h1.page-title {
            margin-left: 100px;
            margin-top: 100px;

            @media screen and (max-width: 1200px) {
                margin-left: 20px;
                margin-top: 20px;
            }
        }
    }


    ${createCSS()}
`;