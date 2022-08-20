import styled, { css } from 'styled-components';

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
            width: 80%;
        }

        h1{
            color: var(--primary-color);
            font-family: var(--roboto-font);
            font-weight: 500;
            font-size: 53px;
            margin: 0;

            @media screen and (max-width: 1200px) {
                font-size: 40px;
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
            }
        }

        .error-message{
            width: 70%;
            text-align: center;
            margin: 1rem auto;
            color: var(--error-color);
            font-weight: 600;
            font-style: italic;
            padding: 10px 12px;
            background: #f856563e;
            border: 1px solid var(--error-color);
            border-radius: 4px;

            @media screen and (max-width: 1200px) {
                width: 90%;
                font-size: .9rem;
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

        ${createCSS()}

    }
`;