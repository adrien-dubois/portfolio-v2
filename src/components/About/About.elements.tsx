import styled, { css, keyframes } from 'styled-components'


const spincube = keyframes`
    from {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(720deg);
    }
    16% {
        transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
    }
    33% {
        transform: rotateY(-90deg) rotateZ(90deg);
    }
    50% {
        transform: rotateY(-180deg) rotateZ(90deg);
    }
    66% {
        transform: rotateY(-270deg) rotateX(90deg);
    }
    83% {
        transform: rotateX(90deg);
    }
`;

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

    .container.about-page,
    .container.contact-page,
    .container.portfolio-page{

        h1{
            font-size: 53px;
            font-family: var(--roboto-font);
            color: var(--primary-color);
            font-weight: 600;
            margin-top: 0;
            position: relative;
            margin-bottom: 40px;
            left: 10px;

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

        .text-zone{
            position: absolute;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
            width: 35%;
            vertical-align: middle;
            display: table-cell;
            max-height: 90%;
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

        h1.page-title {
            margin-left: 100px;
            margin-top: 100px;
        }
    }

    ${createCSS()}
`;

export const StageCube = styled.div`
    width: 50%;
    height: 100%;
    top: 0;
    padding-top: 18%;
    margin-left: 0;
    position: absolute;
    right: 0;
    overflow: hidden;

    .cubespinner{
        animation-name: ${spincube};
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-duration: 12s;
        transform-style: preserve-3d;
        transform-origin: 100px 100px 0;
        margin-left: calc(50% - 100px);

        div{
            position: absolute;
            width: 200px;
            height: 200px;
            border: 1px solid #CCC;
            background: rgba(255, 255, 255, 0.4);
            font-size: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 20px 0px lightyellow;
        }

        .face1 {
            transform: translateZ(100px);
            color: #dd0031;
        }
        .face2 {
            transform: rotateY(90deg) translateZ(100px);
            color: #f06529;
        }
        .face3 {
            transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
            color: #28a4d9;
        }
        .face4 {
            transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
            color: #5ed4f4;
        }
        .face5 {
            transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
            color: #efd81d;
        }
        .face6 {
            transform: rotateX(-90deg) translateZ(100px);
            color: #ec4d28;
        }
    }
`;