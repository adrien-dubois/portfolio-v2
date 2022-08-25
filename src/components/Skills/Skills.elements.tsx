import styled from 'styled-components';

export const CloudContainer = styled.div`
    position: absolute;
    top: 0;
    right: 50%;
    width: 500px;
    height: 500px;
`;

export const SkillsBars = styled.section`
    display: flex;
    padding-left: 0 20rem;
    margin-left: 4rem;
    gap: 10rem;

    .skillz{
        transform: rotate(-90deg);
        width: max-content;
        height: max-content;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        &__bars{
            display: flex;
            flex-direction: row-reverse;
            gap: 1rem;

            &__container{
                display: flex;
                flex-direction: column;
                gap: 2.5rem;

                span{
                    text-transform: uppercase;
                    letter-spacing: 0.2rem;
                    color: var(--primary-color);
                }
                progress{
                    width: 30rem;
                    --webkit-appearance: none;
                    appearance: none;

                    &::-webkit-progress-bar{
                        height: 3rem;
                        background-color: var(--input-color);
                    }
                    &::-webkit-progress-value{
                        background-color: var(--primary-color);
                    }
                }
            }
            h3{
                transform: rotate(90deg);
                color: #FFF;
                font-size: 1.5rem;
            }
        }
    }
`;