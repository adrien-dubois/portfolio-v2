import { Div } from "./Home.elements"
import LogoA from '../../assets/img/logoA.png'
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <Div>
        <div className="text-zone">
            <h1>
                Bonjour, <br/> Je suis
                <img src={LogoA} alt="developpeur"/>
                drien,
                <br/>
                Développeur Web
            </h1>
            <h2>
                Développeur Fullstack / React JS / Symfony PHP
            </h2>

            <Link to="/contact">Contactez-moi</Link>
        </div>
    </Div>
  )
}

export default Home