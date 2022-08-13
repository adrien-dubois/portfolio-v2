import styled from 'styled-components';

export const ContactForm = styled.div`
    width: 100%;
    margin-top: 20px;
  
    form{

        .error::placeholder{
            color: rgb(253, 87, 87);
        }

        ul{
            padding: 0;
            margin: 0;
    
            li{
                padding: 0;
                margin: 0;
                list-style: none;
                margin-bottom: 10px;
                overflow: hidden;
                position: relative;
                opacity: 0;
                animation: fadeInUp 2s 2s;
                animation-fill-mode: forwards;
                clear: both;
    
                .email-content{
                    position: relative;
                    width: 100%;
    
                    #not-mail{
                        display: none;
                        position: absolute;
                        top: -25px;
                        color: var(--error-color);
                        right: 0;
                        transform-origin: 50% 50%;
                    }
    
                    @keyframes dongle{
                        0% {
                            transform: translate(0px, 0px);
                        }
                        10% {
                            transform: translate(-10px, 0px);
                        }
                        20% {
                            transform: translate(10px, 0px);
                        }
                        30% {
                            transform: translate(-10px, 0px);
                        }
                        40% {
                            transform: translate(10px, 0px);
                        }
                        50% {
                            transform: translate(-10px, 0px);
                        }
                        60% {
                            transform: translate(10px, 0px);
                        }
                        70% {
                            transform: translate(-10px, 0px);
                        }
                        80% {
                            transform: translate(10px, 0px);
                        }
                        90% {
                            transform: translate(-10px, 0px);
                        }
                        100% {
                            transform: translate(0px, 0px);
                        }
                    }
    
                }
    
                .form-message{
                    margin-top: 10px;
                    padding: 12px;
                    opacity: 0;
                    background: #115173;
                    transition: .3s ease;
                    color: var(--primary-color);
                    border-radius: 4px;
                    box-shadow: 0 0 2px rgba(51, 51, 51, 0.3);
                }
            }
    
            li.half{
                width: 49%;
                margin-left: 2%;
                float: left;
                clear: none;
                padding-top: 1rem;
                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }

    textarea{
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
    }

    .flat-button{
        color: var(--primary-color);
        background: 0 0;
        font: 11px;
        letter-spacing: 3px;
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
    }

`

export const InfoMap = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    top: 80px;
    right: 40%;
    z-index: 999999;
    width: 280px;
    padding: 20px;
    color: #FFF;
    font-family: var(--ubuntu-font);
    font-size: 1rem;
    font-weight: 300;
    opacity: 0;
    animation: fadeIn 1s 1.5s;
    animation-fill-mode: forwards;

    span{
        font-size: 1rem;
        display: block;
        padding-top: 20px;
        color: var(--primary-color);
    }
`;

export const MapWrap = styled.div`
    background: rgba(8, 253 ,216, 0.1);
    float: right;
    width: 53%;
    height: 100%;

    .leaflet-container{
        width: 100%;
        height: 100%;
        position: relative;
        opacity: 0;
        animation: backInRight 1s 1.2s;
        animation-fill-mode: forwards;
    }
`;