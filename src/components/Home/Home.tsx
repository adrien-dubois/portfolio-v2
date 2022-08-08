import { Div } from "./Home.elements"
import LogoA from '../../assets/img/logoA.png'
import { Link } from "react-router-dom"
import { useState } from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [ 'd', 'r', 'i', 'e', 'n', ',' ];
  const jobArray = ['D','é','v','e','l','o','p','p','e','u','r',' ','W','e','b','.'];

  return (
    <Div>
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>y,</span>
                <br/>
                 <span className={`${letterClass} _14`}>J</span>
                 <span className={`${letterClass} _15`}>e</span>
                 <span className={`${letterClass} _16`}>&nbsp;</span>
                 <span className={`${letterClass} _17`}>s</span>
                 <span className={`${letterClass} _18`}>u</span>
                 <span className={`${letterClass} _19`}>i</span>
                 <span className={`${letterClass} _20`}>s</span>
                <img src={LogoA} alt="developpeur"/>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={21}
                />

                <br/>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={27}
                />
            </h1>
            <h2>
                Développeur Fullstack / React JS / Symfony PHP
            </h2>

            <Link className="flat-button" to="/contact">Contactez-moi</Link>
        </div>
    </Div>
  )
}

export default Home