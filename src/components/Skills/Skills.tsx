import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import GetArrayTranslate from '../../utils/GetArrayTranslate';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Div } from '../Layout/Layout.elements';
import { CloudContainer } from './Skills.elements';
//@ts-ignore
import TagsCanvas from 'react-tags-canvas'

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
                    Elit enim esse exercitation duis eiusmod quis pariatur ipsum proident occaecat. Commodo cupidatat labore fugiat magna do voluptate id labore qui. Aliqua commodo enim laborum ex enim minim ex cillum fugiat. Aliquip consectetur esse ullamco velit sunt dolore elit ex irure consectetur.
                </p>
                <p>
                    Dolor cupidatat tempor proident nostrud culpa ut deserunt excepteur labore ut. Eu dolore adipisicing et laborum labore ut eu in adipisicing nostrud mollit voluptate aliquip. Voluptate excepteur fugiat tempor esse duis. Et ullamco ea incididunt do magna non tempor in occaecat aliquip est nostrud.
                </p>
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
                    tags={[
                    { value: 'Javascript', weight: 30 },
                    { value: 'React', weight: 30 },
                    { value: 'JSON', weight: 30 },
                    { value: 'HTML5', weight: 20 },
                    { value: 'CSS3', weight: 20 },
                    { value: 'GSap', weight: 20 },
                    { value: 'PHP', weight: 30 },
                    { value: 'Styled Components', weight: 30 },
                    { value: 'Symfony', weight: 30 },
                    { value: 'TypeScript', weight: 30 },
                    { value: 'REST', weight: 30 },
                    { value: 'Express', weight: 30 },
                    { value: 'SQL', weight: 20 },
                    { value: 'Git', weight: 20 },
                    { value: 'API', weight: 20 },
                    { value: 'Redux', weight: 20 },
                    { value: 'NodeJS', weight: 20 },
                    { value: 'Javascript', weight: 20 }
                    ]}
                />
            </CloudContainer>    

        </div>
    </Div>
  )
}

export default Skills