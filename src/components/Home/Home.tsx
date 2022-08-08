import { Div } from "./Home.elements"
import LogoA from '../../assets/img/logoA.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import Logo from "./Logo/Logo"


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const startArray = ['J','e',' ','s','u','i','s']
  const nameArray = [ 'd', 'r', 'i', 'e', 'n', ',' ];
  const jobArray = ['D','é','v','e','l','o','p','p','e','u','r',' ','W','e','b','.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <Div>
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>e</span>
                <span className={`${letterClass} _13`}>y,</span>
                <br/>
                <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={startArray}
                  idx={14}
                />
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
        <Logo/>
    </Div>
  )
}

export default Home