import styled, { createGlobalStyle } from 'styled-components';
import 'animate.css'
// @ts-ignore
import CoolveticaWoff from './assets/fonts/CoolveticaRg-Regular.woff'
// @ts-ignore
import CoolveticaWoff2 from './assets/fonts/CoolveticaRg-Regular.woff2'

const GlobalStyles = createGlobalStyle`


    @font-face{
        font-family: 'Coolvetica';
        src: url(${CoolveticaWoff}) format('woff'),
             url(${CoolveticaWoff2}) format('woff2');
    }

    :root{
        /*----- FONT -----*/
        --montserrat-font: 'Montserrat', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --ubuntu-font: 'Ubuntu', sans-serif;
        --aurore-font: 'La Belle Aurore', cursive;
        --roboto-font: 'Roboto', sans-serif;
        --coolvetica: 'Coolvetica', sans-serif;

        /*----- COLORS -----*/
        --black-color: #1d1818;
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
        margin: 0;
        color: #444;
        font-family: var(--poppins-font);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #022c43;
        overflow-x: hidden;
        display: block;

        
        @media screen and (max-width: 1200px){
            overflow: visible;
        }
    }

    textarea, input{
        font-family: var(--ubuntu-font);
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