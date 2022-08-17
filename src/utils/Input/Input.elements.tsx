import styled from 'styled-components'

export const Div = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 2rem 1fr;
    padding: 0 0.4rem;
    background: #115173;
    margin: 10px 0;
    list-style: none;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    clear: both;
    
    &.half{
        width: 49%;
        margin-left: 2%;
        float: left;
        clear: none;

        &:first-child {
            margin-left: 0;
        }
    }

    &.error{
        border : 1px solid var(--error-color);
    }

    .icon{
        text-align: center;
        line-height: 55px;

        svg{
            color: var(--primary-color);
            font-size: 1.1rem;
        }
    }

    input{
        width: 100%;
        border: none;
        outline: none;
        line-height: 1;
        background: none;
        height: 50px;
        font-size: 1rem;
        color: var(--white-color);
        padding: 0 20px;
        box-sizing: border-box;
        
        &::placeholder{
            font-family: var(--poppins-font);
            font-weight: 400;
            opacity: 0.6;
            color: var(--primary-color);
        }
    }
 

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: white !important;
    }

    @media screen and (max-width: 1400px) {
        width: 45%;
        margin-right: 1rem;
    }
`;