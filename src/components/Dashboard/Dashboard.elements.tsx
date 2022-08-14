import styled from 'styled-components';

export const ProjectForm = styled.div`
        margin-top: 200px;
        margin-left: 200px;

        form{
            width: 80%;
        }

        div,
        textarea{
            width: 60%;
            border-radius: 4px;
        }

        textarea{
            opacity: 0;
            animation: fadeInUp 2s 2s;
            animation-fill-mode: forwards;

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