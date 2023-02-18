import styled from 'styled-components';


export const ContactForm = styled.div`
    min-width: 100%;
    margin-top: 20px;
    position: relative;

    .form-tags{
        position: absolute;
        left: -10px;
        right: 0;
        
        &.top{
            top: -5px;

        }

        &.bottom{
            bottom: 0;
        }
    }

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
                display: block;
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
                
                .field{
                    border: 0;
                    border-bottom: 1px solid transparent;
                }

                .field ~ .border{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--primary-color);
                }

                .field:focus ~ .border{
                    width: 100%;
                    transition: all 0.4s;
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

`

export const InfoMap = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.85);
    top: 50px;
    right: 30%;
    z-index: 999999;
    width: 267px;
    padding: 20px;
    color: #FFF;
    font-family: var(--ubuntu-font);
    font-size: 1rem;
    font-weight: 300;
    opacity: 0;
    animation: fadeIn 1s 1.5s;
    animation-fill-mode: forwards;

    @media screen and (max-width: 1200px) {
        display: none;
    }
    
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

    @media screen and (max-width: 1200px) {
        float: none;
        width: 100%;
        height: 400px;
        margin: 0;
    }

    .leaflet-container{
        width: 100%;
        height: 100%;
        position: relative;
        opacity: 0;
        animation: backInRight 1s 1.2s;
        animation-fill-mode: forwards;
    }
`;