import styled from 'styled-components';

export const CloudContainer = styled.div`
   float: right;
   width: 53%;
   height: 100%;

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

    .container{
        position: relative;
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        .row{
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-gap: 20px;

            .col{
                grid-column: span 12;

                .skill-bx{
                    text-align: center;

                    .skill-slider{
                        margin: 0 auto;
                        position: relative;

                        &__item{
                            margin: 0 auto; 
                        }
                    }
                }
            }
        }
    }
`;