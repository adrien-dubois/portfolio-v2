import styled from 'styled-components';

export const Div = styled.div`
    z-index: 0;
    width: 400px;
    height: 609px;
    position: absolute;
    top: 0;
    right: 15%;
    bottom: 0;
    left: auto;
    margin: auto;
    opacity: 1;

    @media screen and (max-width: 1200px) {
        position: relative;
        width: 180px;
        height: auto;
        top: 50px;
        right: 0;
        box-sizing: border-box;
        margin: auto;
        left: 0;
    }

    .solid-logo{
        position: absolute;
        top: 0;
        right: auto;
        bottom: auto;
        left: 0;
        margin: auto;
        width: 100%;
        opacity: 1;
        transform: rotateZ(30deg);
        z-index: 1;
    }

    .cls-1,.cls-2{
        stroke: var(--primary-color);
        stroke-width: 0.7px;
    }
`;