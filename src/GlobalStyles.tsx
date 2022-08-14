import styled, { createGlobalStyle } from 'styled-components';
import 'animate.css'
import './index.scss'

import 'loaders.css/src/animations/pacman.scss'

const GlobalStyles = createGlobalStyle`

    :root{
        /*----- FONT -----*/
        --montserrat-font: 'Montserrat', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --ubuntu-font: 'Ubuntu', sans-serif;
        --aurore-font: 'La Belle Aurore', cursive;
        --roboto-font: 'Roboto', sans-serif;

        /*----- COLORS -----*/
        --black-color: #000;
        --white-color: #FFF;
        --primary-color: #FFD700;
        --white-antique: #FAECD9;
        --error-color: #F43B47;
        --picto-color: #4d4d4e;
        --bg-color: #022C43;
        --font-first: #444;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        list-style: none;
        outline: none;
        border: none;
        text-decoration: none;
    }
    html {
        overscroll-behavior: contain;
        height: 100%;
        font-size: 16px;
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: var(--poppins-font);
        color: #444;
        background: #022c43;
        overflow: hidden;
        display: block;
    }

    textarea, input{
        font-family: var(--ubuntu-font);
    }

    .loader-hidden{
        display: none;
    }

    .loader-active{
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 50px;
        height: 50px;
        color: var(--primary-color);
        animation: fadeOut 1s 1s;
        animation-fill-mode: forwards;
    }

    .dashboard{
        margin-top: 200px;
        margin-left: 200px;
    }
`;

export default GlobalStyles;

export const TextArea = styled.textarea`

    width: 100%;
    border: none;
    outline: none;
    background: #115173;
    height: 50px;
    font-size: 1rem;
    color: var(--white-color);
    padding: 20px;
    min-height: 150px;
    box-sizing: border-box;

    &::placeholder{
        font-family: var(--poppins-font);
        font-weight: 400;
        opacity: 0.6;
        color: var(--primary-color);
    }
`;

export const FlatButton = styled.input`

    color: var(--primary-color);
    background: 0 0;
    font: 11px;
    letter-spacing: 3px;
    font-family: sans-serif;
    text-decoration: none;
    padding: 8px 10px;
    border: 1px solid var(--primary-color);
    float: right;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover{
        background: var(--primary-color);
        color: #333;
    }
`;

export const InverseBtn = styled.button`
    color: #333;
    background: var(--primary-color);
    font: 11px;
    text-align: center;
    letter-spacing: 3px;
    font-family: sans-serif;
    text-decoration: none;
    padding: 8px 10px;
    border: 1px solid var(--primary-color);
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover{
        background: 0 0;
        color: var(--primary-color);
    }
`;