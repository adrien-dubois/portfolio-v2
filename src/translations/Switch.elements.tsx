import styled, { keyframes } from 'styled-components'
import FrFlag from '../assets/flags/fr_flag.jpg'
import UkFlag from '../assets/flags/uk_flag.jpg'

const off = keyframes`
    0%{
        transform: translateX(80px);
        width: 46px;
    }
    50%{
        width: 75px;  
        border-radius: 25px;   
    }
    100%{
        transform: translateX(0px); 
        width: 46px;
    }
`;

const on = keyframes`
    0%{
        transform: translateX(0px);
        width: 46px;
    }
    50%{
        width: 75px;  
        border-radius: 25px;   
    }
    100%{
        transform: translateX(80px); 
        width: 46px;
    }
`;

export const Wrapper = styled.div`
    position: absolute;
    top: 0.6%;
    right: 2%;
    width: 130px;
    height: 50px;
    z-index: 5;

    @media screen and (max-width: 1200px) {
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    .switch{
        position: relative;
        width: 96%;
        height: 80%;
        margin: 0;
        appearance: none;
        -webkit-appearance: none;
        background-image: url(${FrFlag});
        background-size: 130px;
        background-position: 50% 46%;
        background-repeat: no-repeat;
        border-radius: 25px;
        box-shadow: inset 0px 0px 2px rgba(255, 255, 255, .7);
        transition: background-image .7s ease-in-out;
        outline: none;
        cursor: pointer;
        overflow: hidden;

        &:checked{
            background-image: url(${UkFlag});
            transition: background-image 1s ease-in-out;
        }

        &:after{
            content: '';
            width: 38.5px !important;
            height: 37px;
            border-radius: 50%;
            background-color: #FFF;
            position: absolute;
            left: 2px;
            top: 2px;
            transform: translateX(0px);
            animation: ${off} .7s forwards cubic-bezier(.8, .5, .2, 1.4);
            box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
        }
    }

    .switch:checked:after{
        animation: ${on} .7s forwards cubic-bezier(.8, .5, .2, 1.4);
        box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
        left: 5px;
    }

`;