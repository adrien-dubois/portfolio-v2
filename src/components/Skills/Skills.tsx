import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import GetArrayTranslate from '../../utils/GetArrayTranslate';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Div } from '../Layout/Layout.elements';
import { CloudContainer, SkillsBars } from './Skills.elements';
//@ts-ignore
import TagsCanvas from 'react-tags-canvas'
import { dataSkills, skillsBars } from './DataSkills';

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
                <p>
                    Dolor cupidatat tempor proident nostrud culpa ut deserunt excepteur labore ut. Eu dolore adipisicing et laborum labore ut eu in adipisicing nostrud mollit voluptate aliquip. Voluptate excepteur fugiat tempor esse duis.
                </p>

                <SkillsBars>
                    <div className="skillz">
                        {
                            skillsBars.map(({name,amount}) => {
                                return(
                                   <div className="skillz__bars" key={name}>
                                        <div className="skillz__bars__container">
                                            <progress value={amount} max="100" />
                                            <span>{name}</span>
                                        </div>
                                        <h3>{amount}%</h3>
                                   </div> 
                                )
                            })
                        }
                    </div>
                </SkillsBars>

            </div>

            <CloudContainer>
                <TagsCanvas
                    width={window.innerWidth}
                    height={window.innerHeight}
                    dragControl
                    dragThreshold={4}
                    pulsateTime={3}
                    pulsateTo={1.0}
                    textColour='#FFD700'
                    maxSpeed={0.02}
                    shuffleTags
                    shape='sphere'
                    zoom={0.8}
                    noSelect
                    textFont={null}
                    pinchZoom
                    freezeDecel
                    initial= {[0.3, -0.1]}
                    depth={1.1}
                    repeatTags={2}
                    fadeIn = {1000}
                    outlineThickness={0.5}
                    tags={dataSkills}
                />
            </CloudContainer>    

        </div>
    </Div>
  )
}

export default Skills