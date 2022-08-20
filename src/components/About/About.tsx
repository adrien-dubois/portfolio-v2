import { useEffect, useState } from "react";
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact, FaSymfony } from "react-icons/fa";
import ParticlesComponent from "../../utils/ParticlesComponent";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { Div } from "../Layout/Layout.elements";
import { StageCube } from "./About.elements";
import { useTranslation } from 'react-i18next';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const { t } = useTranslation();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


  return (
    <Div>
        <div className="container about-page">
        <div className="particles">
                <ParticlesComponent/>
        </div>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={"À propos de moi".split("")}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <p>
                    {t('Title')}
                </p>
                <br/>
                <p>
                    Labore in voluptate enim cillum minim deserunt quis ipsum. Ea qui voluptate adipisicing labore nostrud aliquip elit ex eu reprehenderit id. Nostrud ad veniam non aliquip amet labore occaecat consectetur voluptate ex nostrud aliqua incididunt. 
                </p>
                <br/>
                <p>
                    Lorem tempor culpa reprehenderit eu adipisicing elit. Esse do exercitation nisi labore commodo. Cillum velit amet in cupidatat nostrud id sit quis et deserunt sunt. Quis cupidatat mollit cillum veniam dolore qui sint.
                </p>
            </div>
           
            <StageCube>
                <div className="cubespinner">
                    <div className="face1">
                        <FaSymfony />
                    </div>
                    <div className="face2">
                        <FaHtml5 />
                    </div>
                    <div className="face3">
                        <FaCss3 />
                    </div>
                    <div className="face4">
                        <FaReact />
                    </div>
                    <div className="face5">
                        <FaJsSquare />
                    </div>
                    <div className="face6">
                        <FaGitAlt />
                    </div>
                </div>
            </StageCube>

        </div>
    </Div>
  )
}

export default About