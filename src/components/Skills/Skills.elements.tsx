import styled from 'styled-components';

export const CloudContainer = styled.div`
   float: right;
   width: 53%;
   height: 100%;

   @media screen and (max-width: 1200px) {
    display: none;
   }

   .tagcloud{
    color: var(--primary-color);
    font-family: var(--ubuntu-font);
    font-size: 20px;
    font-weight: 600;
    margin: 10% auto;
   }

   .tagcloud--item:hover{
    color: #175173;
   }
`;

export const Skillz = styled.section`
    padding: 0 0 50px 0;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    
    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        margin-left: -1rem;
        overflow-x: hidden;
    }

    .skill-item{
        width: 200px;
        height: 200px;

        @media screen and (max-width: 1200px) {
            margin-left: -3rem;
        }
    }
`;