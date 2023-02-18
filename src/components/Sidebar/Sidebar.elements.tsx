import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LogoTop = styled.h1`
    display: inline-block;
    color: var(--primary-color);
    font-family: var(--pacifico);
    font-size: 1.5rem;
    margin: 0 auto;
`;

export const Div = styled.div`
    background: #181818;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;
    
    .logo{
        display: flex;
        margin-top: 1.2rem;
    }
    
    @media screen and (max-width: 1200px) {
        background: transparent;
        position: initial;
        height: auto;
        min-height: auto;
    }

    ul{
        position: absolute;
        bottom: 20px;
        width: 100%;
        display: block;
        padding: 0;
        text-align: center;
        margin: 0;

        @media screen and (max-width: 1200px) {
            display: none;
        }

        li{
            a{
                padding: 7px 0;
                display: block;
                font-size: 15px;
                line-height: 16px;
                color: var(--picto-color);

                &:hover svg{
                    color: var(--primary-color);
                }
            }
        }
    }

    .hamburger-icon,
    .close-icon{
        display: none;

        @media screen and (max-width: 1200px) {
            display: block;
            position: absolute;
            top: 15px;
            right: 15px;
            z-index: 1;
        }
    }

`;

export const Nav = styled.nav`
    display: block;
    text-align: center;
    position: absolute;
    height: 210px;
    top: 50%;
    margin-top: -120px;
    width: 100%;

    @media screen and (max-width: 1200px) {
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        transform: translateY(-100%);
        position: absolute;
        z-index: 2;
        margin: 0;
        opacity: 1;
        transition: all .5s ease;
        background: #181818;
        overflow: hidden;
    }

    &.mobile-show {

        @media screen and (max-width: 1200px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            transform: translateY(0%);
        }
    }

    a{
        font-size: 30px;
        display: block;
        color:  #4d4d4e;
        line-height: 51px;
        position: relative;
        text-decoration: none;

        @media screen and (max-width: 1200px) {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg{
            transition: all 0.3s ease-out;

            @media screen and (max-width: 1200px) {
                opacity: 1 !important;
            }
        }

        &.active{

            svg{

                color: var(--primary-color);
            }
        }
        
        &:hover{
            color: var(--primary-color);

            svg{
                opacity: 0;
            }

            &:after{
                opacity: 1;
            }
        }

        &:after{
            content: '';
            font-size: 9px;
            letter-spacing: 1.5px;
            font-style: var(--ubuntu-font);
            font-weight: 500;
            text-transform: uppercase;
            position: absolute;
            bottom: 0;
            display: block;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: all 0.3s ease-out;

            @media screen and (max-width: 1200px) {
                opacity: 1;
                position: initial;
                width:  auto;
                margin-left: 10px;
            }
        }

        &:first-child{
            &::after{
                content: attr(data-text);
            }
        }

        &.about-link{
            &::after{
                content: attr(data-text);
            }
        }

        &.contact-link{
            &::after{
                content: attr(data-text);
            }
        }

        &.skills-link{
            &::after{
                content: attr(data-text);
            }
        }

        &.projects-link{
            &::after{
                content: attr(data-text);
            }
        }
    }
`;

export const Icons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    position: absolute;
    bottom: 0;
    left: 1.2rem;
`;

export const Line = styled(motion.span)`
    width: 2px;
    height: 8rem;
    background-color: var(--picto-color);
`;