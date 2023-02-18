import { Div } from "./Home.elements"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import Logo from "./Logo/Logo"
import GetArrayTranslate from '../../utils/GetArrayTranslate';
import { useTranslation } from "react-i18next"


const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const { t } = useTranslation();

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
                    strArray={GetArrayTranslate('Homepage.StartTitle')}
                    idx={14}
                  />

                  <br/>
                  <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={GetArrayTranslate('Homepage.JobTitle')}
                    idx={27}
                  />
              </h1>
              <h2>
                  {t('Homepage.Subtitle')}
              </h2>

              <Link className="flat-button" to="/contact">{t('Homepage.Button')}</Link>
          </div>
          <Logo/>

      </Div>
  )
}

export default Home