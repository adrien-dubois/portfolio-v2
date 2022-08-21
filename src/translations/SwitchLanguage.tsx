import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FrFlag, UkFlag } from '../assets/flags';
import Flag from './Flag';
import Switch from './Switch';


const SwitchLanguage = () => {

    const { i18n } = useTranslation();

    const handleChangeLanguage = (language: any) => {
        i18n.changeLanguage(language);
    }

    const selectedLanguage = i18n.language;

  return (

    <FlagContainer>
        <Flag
            image={FrFlag}
            isSelected={ selectedLanguage === 'fr' }
            onClick = {() => handleChangeLanguage('fr')}
        />
        <Switch/>
        <Flag
            image={UkFlag}
            isSelected={ selectedLanguage === 'en' }
            onClick = {() => handleChangeLanguage('en')}
        />
    </FlagContainer>

  )
}

const FlagContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    z-index: 5;

    label{
        /* position: absolute;
        bottom: 0; */
        margin: 0 5px;
        margin-top: 20px;
    }

    img{
        width: 50px;
        cursor: pointer;
    }
`

export default SwitchLanguage