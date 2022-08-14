import styled from 'styled-components';

export const ProjectForm = styled.div`
    margin-top: 200px;
    margin-left: 200px;
    position: relative;

    form{
        width: 80%;
        h1{
            color: var(--primary-color);
            font-family: var(--roboto-font);
            font-weight: 500;
            font-size: 53px;
            margin: 0;
    
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