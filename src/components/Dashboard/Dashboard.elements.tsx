import styled from 'styled-components';

export const ProjectForm = styled.div`
    margin-top: 200px;
    margin-left: 200px;
    position: relative;

    @media screen and (max-width: 1200px) {
        position: initial;
        margin-top: 20px;
        margin-left: 20px;
    }

    form{
        width: 80%;

        @media screen and (max-width: 1200px) {
            width: 90%;
        }
        
        h1{
            color: var(--primary-color);
            font-family: var(--roboto-font);
            font-weight: 500;
            font-size: 53px;
            margin: 0;

            @media screen and (max-width: 1200px) {
                font-size: 40px;
            }
    
            &::before{
                content: '<h1>';
                font-family: var(--aurore-font);
                color: var(--primary-color);
                font-size: 1.1rem;
                position: absolute;
                margin-top: -40px;
                left: 15px;
                opacity: 0.6;
            }
    
            &::after{
                content: '</h1>';
                font-family: var(--aurore-font);
                color: var(--primary-color);
                font-size: 1.1rem;
                position: absolute;
                margin-top: 18px;
                margin-left: 20px;
                opacity: 0.6;
            }
        }

        div,
        textarea{
            width: 60%;
            border-radius: 4px;

            @media screen and (max-width: 1200px) {
                width: 100%;
            } 
        }


        .container-btn{
            display: flex;
            align-items: center;
            .btn{
                float: none;
                margin-right: 1rem;
            }
        }
`;