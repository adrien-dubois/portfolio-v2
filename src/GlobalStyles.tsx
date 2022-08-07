import { createGlobalStyle } from 'styled-components';
import 'animate.css'

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
`;

export default GlobalStyles;