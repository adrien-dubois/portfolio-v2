import { createGlobalStyle } from 'styled-components';
import 'animate.css'

const GlobalStyles = createGlobalStyle`

    @import 'animate.css'

    :root{
        /*----- FONTS -----*/
        --montserrat-font: 'Montserrat', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --ubuntu-font: 'Ubuntu', sans-serif;
        --aurore-font: 'La Belle Aurore', cursive;

        /*----- COLORS -----*/
        --black-color: #000;
        --white-color: #FFF;
        --primary-color: #FFD700;
        --white-antique: #FAECD9;
        --error-color: #F43B47;
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
        font-size: 62.5%;
        @media (prefers-reduced-motion: no-preference) {
            scroll-behavior: smooth;
        }
    }

    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 300 11px/1.4 var(--poppins-font);
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