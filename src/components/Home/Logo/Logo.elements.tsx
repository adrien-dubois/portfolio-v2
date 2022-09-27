import styled from 'styled-components';

export const Div = styled.div`

    z-index: 0;
    width: 400px;
    height: 609px;
    position: absolute;
    top: 6px;
    right: 15%;
    bottom: 0;
    left: auto;
    margin: auto;
    opacity: 0;

    @media screen and (max-width: 1200px) {
        position: relative;
        width: 170px;
        height: auto;
        top: 50px;
        right: 0;
        box-sizing: border-box;
        margin: auto;
        left: 0;
    }

    svg{
        width: 100%;
        height: auto;
        bottom: 0;
        right: 0%;
        left: auto;
        transform: rotateZ(30deg) !important;
    }

    .solid-logo{
        position: absolute;
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
        margin: auto;
        width: 100%;
        opacity: 0;
        transform: rotateZ(30deg);
        z-index: 1;
    }

    .cls-1{
        stroke: var(--primary-color);
        stroke-width: 3px;
    }
`;
       