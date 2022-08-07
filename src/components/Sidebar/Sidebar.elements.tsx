import styled from 'styled-components';

export const Div = styled.div`
    background: #181818;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    min-height: 500px;

    .logo{
        display: block;
        padding: 8px 0;

        img{
            display: block;
            margin: 8px auto;
            width: 50px;
            height: auto;

            &.sub-logo{
                width: 60px;
            }
        }
    }

    nav{
        display: block;
        text-align: center;
        position: absolute;
        height: 210px;
        top: 50%;
        margin-top: -120px;
        width: 100%;

        a{
            font-size: 30px;
            display: block;
            color:  #4d4d4e;
            line-height: 51px;
            position: relative;
            text-decoration: none;

            svg{

                transition: all 0.3s ease-out;
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
            }

            &:first-child{
                &::after{
                    content: 'accueil';
                }
            }

            &.about-link{
                &::after{
                    content: 'à propos';
                }
            }

            &.contact-link{
                &::after{
                    content: 'contact';
                }
            }
        }
    }
`;