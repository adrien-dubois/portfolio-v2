import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper } from './Switch.elements';


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


  return (
    <Wrapper>
        <input type="checkbox" name="checkbox" className='switch' checked={isToggle} onChange={() => setIsToggle(!isToggle)} />
    </Wrapper>

  )
}

export default SwitchLanguage;