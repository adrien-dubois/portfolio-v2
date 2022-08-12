import { useEffect, useState } from "react";
import { FaCss3, FaGitAlt, FaHtml5, FaJsSquare, FaReact, FaSymfony } from "react-icons/fa";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import { Div, StageCube } from "./About.elements"


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


  return (
    <Div>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        strArray={"À propos de moi".split("")}
                        idx={15}
                        letterClass={letterClass}
                    />
                </h1>
                <p>
                    Elit anim occaecat exercitation aute sit est cillum laboris sunt culpa pariatur laboris. Sint sint minim laborum enim ea commodo exercitation. Pariatur irure sint ea Lorem. Sunt ullamco ut quis aliquip. Officia ex occaecat enim cupidatat voluptate proident consequat ex velit culpa ut elit. Ut enim veniam Lorem sunt laboris sit eiusmod incididunt.
                </p>
                <br/>
                <p>
                    Labore in voluptate enim cillum minim deserunt quis ipsum. Ea qui voluptate adipisicing labore nostrud aliquip elit ex eu reprehenderit id. Nostrud ad veniam non aliquip amet labore occaecat consectetur voluptate ex nostrud aliqua incididunt. Deserunt est laboris fugiat adipisicing id duis adipisicing cupidatat excepteur enim. Aliquip cupidatat et tempor fugiat velit consequat magna ex aliqua exercitation do mollit.
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
        <Loader type="pacman" active/>
    </Div>
  )
}

export default About