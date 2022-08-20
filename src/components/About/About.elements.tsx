import styled, { keyframes } from 'styled-components'


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



export const Div = styled.div`
    
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

    @media screen and (max-width: 1200px) {
        position: initial;
        width: 100%;
        height: 0%;
        overflow: visible;
    }

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