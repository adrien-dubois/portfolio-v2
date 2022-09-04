import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import GetArrayTranslate from '../../utils/GetArrayTranslate';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Div } from '../Layout/Layout.elements';
import { CloudContainer, Skillz } from './Skills.elements';
import { skillsCircle } from './DataSkills';
import WordCloud from './WordCloud';
import { SkillCircle } from './SkillCircle';


const Skills = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

  return (
    <Div>
        <div className="container skill-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={GetArrayTranslate('Skills.Title')}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <p>
                    Elit enim esse exercitation duis eiusmod quis pariatur ipsum proident occaecat. Commodo cupidatat labore fugiat magna do voluptate id labore qui. Aliqua commodo enim laborum ex enim minim ex cillum fugiat.
                </p>

                <Skillz id="skills">
                     { skillsCircle.map(({name, amount}) => {
                        return (

                            <div className="skill-item">

                                <SkillCircle 
                                    name={name} 
                                    number={amount}
                                />

                            </div>

                        )
                    })}

                </Skillz>

            </div>

            <CloudContainer>
                <WordCloud />
            </CloudContainer>    

        </div>
    </Div>
  )
}

export default Skills