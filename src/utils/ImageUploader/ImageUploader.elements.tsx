import styled from 'styled-components';

export const Uploader = styled.div`
    position: relative;
    /* cursor: pointer; */
    width: 50px !important;
    height: 35px;
    margin-left: 1.5rem;
    margin-bottom: 1rem;

    svg{
        position: absolute;
        height: 35px;
        width: 35px;
        transform: translate(-18px, -1px);
        color: var(--primary-color);
    }

    input{
        width: 36px;
        height: 36px;
        position: absolute;
        transform: translate(-16px, -3px);
        cursor: pointer;
        opacity: 0;

        &::-webkit-file-upload-button{
            cursor: pointer;
        }
    }
`;