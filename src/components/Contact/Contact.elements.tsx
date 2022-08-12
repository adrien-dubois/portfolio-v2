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
            display: block;
            position: relative;
            opacity: 0;
            animation: fadeInUp 2s 2s;
            animation-fill-mode: forwards;
        }
    }
`