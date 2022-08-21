import styled from 'styled-components';


const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;

    input{
        opacity: 0;
        width: 0;
        height: 0;

    }
    
    input:checked + .slider:before{
        transform: translateX(26px);
    }

    input:checked + .slider{
        background-color: #2196f3;
    }


    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 34px;

        &:before{
            position: absolute;
            content: '';
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: #fff;
            transition: 0.4s;
            border-radius: 50%;
        }
    }
`;

const Switch = () => {
  return (
    <Label>
        <input type="checkbox" />
        <span className="slider"/>
    </Label>
  )
}

export default Switch