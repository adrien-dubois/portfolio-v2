import styled from 'styled-components';

export const ContactForm = styled.div`
    width: 100%;
    margin-top: 20px;
    
    ul{
        padding: 0;
        margin: 0;

        li{
            padding: 0;
            margin: 0;
            list-style: none;
            margin-bottom: 10px;
            overflow: hidden;
            /* display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column; */
            position: relative;
            opacity: 0;
            animation: fadeInUp 2s 2s;
            animation-fill-mode: forwards;
            clear: both;
        }

        li.half{
            width: 49%;
            margin-left: 2%;
            float: left;
            clear: none;

            &:first-child {
                margin-left: 0;
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
    }

`