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

        .container-btn{
            display: flex;
            align-items: center;
            .btn{
                float: none;
                margin-right: 1rem;
            }

            .logout{
                color: #333;
                background: var(--primary-color);
                font: 11px;
                text-align: center;
                letter-spacing: 3px;
                font-family: sans-serif;
                text-decoration: none;
                padding: 8px 10px;
                border: 1px solid var(--primary-color);
                float: right;
                border-radius: 4px;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s ease-in;

                &:hover{
                    background: 0 0;
                    color: var(--primary-color);
                }
            }
        }
`;