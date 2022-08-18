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
    
    .container{
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
    }
    
    .portfolio-page{
        overflow: auto;
        padding-left: 100px;
        padding-right: 50px;
        width: calc(100% - 150px);
        position: initial;
        height: 100%;

        h1{
            font-size: 53px;
            font-family: var(--roboto-font);
            color: var(--primary-color);
            font-weight: 600;
            position: relative;
            margin-bottom: 40px;
            left: 10px;
            margin-left: 100px;
            margin-top: 200px;

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

    ${createCSS()}
`;