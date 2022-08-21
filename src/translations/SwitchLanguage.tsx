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

    label{
        margin: 0 5px;
        margin-top: 16px;
    }

    img{
        width: 40px;
    }
`

export default SwitchLanguage