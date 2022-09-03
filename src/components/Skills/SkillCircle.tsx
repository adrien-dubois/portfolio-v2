import styled from "styled-components"

interface Props{
    number: number,
    name: string
}

export const SkillCircle = ({ number, name }: Props) => (
    <>
    <Box percent={number}>
        <div className="percent">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
                <h2>{number}<span>%</span></h2>
            </div>    
        </div>
        <h2 className="text">{name}</h2>
    </Box>
    </>
  )


const Box = styled.div<{percent: number}>`
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 3.5rem;

    .percent{
        position: relative;
        width: 150px;
        height: 150px;

        svg{
            position: relative;
            width: 150px;
            height: 150px;

            circle{
                width: 150px;
                height: 150px;
                fill: none;
                stroke: #000;
                stroke-width: 10;
                transform: translate(5px, 5px);
                stroke-dasharray: 440;
                stroke-dashoffset: 440;
                stroke-linecap: round;

                &:nth-child(1){
                    stroke-dashoffset: 0;
                    stroke: #00000026;
                }

                &:nth-child(2){
                    stroke-dashoffset: ${({percent}) => `calc(440 - (440 * ${percent}) / 100)`};
                    stroke: #03a9f4;
                }
            }
        }

        .number{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--primary-color);

            h2{
                font-size: 34px;

                span{
                    font-size: 24px;
                }
            }
        }
    }

    .text{
        padding: 10px 0 0;
        color: var(--primary-color);
        font-weight: 700;
        letter-spacing: 1px;
    }
`;