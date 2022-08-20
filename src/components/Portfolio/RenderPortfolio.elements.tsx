import styled from 'styled-components'

export const Div = styled.div`

    .images-container{
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        padding-bottom: 100px;

        @media screen and (max-width: 1200px) {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
        }

        .image-box{
            position: relative;
            flex: 1 1 20%;
            height: 400px;
            overflow: hidden;
            border-radius: 10px;
            max-width: calc(20% - 10px);

            @media screen and (max-width: 1200px) {
                height: 300px;
                width: 100%;
                max-width: calc(80% - 10px);
            }
            
            &:after{
                content: "";
                background: linear-gradient(180deg,var(--primary-color),#000);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                z-index: 2;
                opacity: 0;
            }

            &:hover:after{
                opacity: 0.65;
            }

            &:hover .content{
                bottom: 0;
                background: transparent;
            }

            .portfolio-image{
                position: absolute;
                z-index: 2;
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }

            .content{
                position: absolute;
                width: 100%;
                z-index: 3;
                padding: 10px 20px;
                transition: all 0.3s  cubic-bezier(0.645, 0.045, 0.355, 1);
                background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0.2) 0,
                    rgba(0, 0, 0, 1)
                );
                bottom: -70px;

                .title{
                    margin-bottom: 0;
                    margin-top: 0;
                    color: #FFF;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 24px;

                    @media screen and (max-width: 1200px) {
                        margin-bottom: 5px;
                    }
                }

                .description{
                    font-size: 14px;
                    margin-bottom: 5px;
                    color: #FFF;
                    font-weight: 700;

                    @media screen and (max-width: 1200px) {
                        font-weight: 600;
                        font-size: 13px;
                    }
                }

                .btn{
                    margin-top: 30px;
                    margin-bottom: 10px;
                    padding: 0 23px;
                    height: 40px;
                    line-height: 34px;
                    border: 2px solid var(--primary-color);
                    border-radius: 4px;
                    font-size: 14px;
                    color: #FFF;
                    background: transparent;
                    cursor: pointer;
                    text-transform: uppercase;
                    font-weight: 700;
                    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

                    &:hover{
                        transform: translateY(-3px);
                        background: var(--primary-color);
                    }
                }

            }
        }
    }
`;