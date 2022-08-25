import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FrFlag, UkFlag } from '../assets/flags';
import Flag from './Flag';
import Switch from './Switch';


const SwitchLanguage = () => {

    const { i18n } = useTranslation();
    const [isToggle, setIsToggle] = useState<boolean>(false);


    useEffect(() => {
        if(isToggle === true){
            i18n.changeLanguage('en');
        }
        if(isToggle === false) {
            i18n.changeLanguage('fr');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isToggle]);

    const selectedLanguage = i18n.language;


  return (

    <FlagContainer>
        <Flag
            image={FrFlag}
            isSelected={ selectedLanguage === 'fr' }
        />
        <Switch isToggled={isToggle} onToggle={() => setIsToggle(!isToggle)} />
        <Flag
            image={UkFlag}
            isSelected={ selectedLanguage === 'en' }
        />
    </FlagContainer>

  )
}

const FlagContainer = styled.div`
    position: absolute;
    top: -1%;
    right: 0;
    width: 230px;
    display: flex;
    justify-content: space-evenly;
    z-index: 5;
    opacity: 0;
    animation: fadeIn 1s 1.5s;
    animation-fill-mode: forwards;

    @media screen and (max-width: 1200px) {
        width: 50%;
        margin: 0 auto;
        left: 0;
        bottom: 0;  
        top: initial;
        margin-bottom: 10px;
    }

    label{
        margin: 0 5px;
        margin-top: 16px;

        @media screen and (max-width: 1200px) {
            margin-top: 10px;
        }
    }

    img{
        width: 40px;

        @media screen and (max-width: 1200px) {
            width: 30px;
        }
    }
`

export default SwitchLanguage