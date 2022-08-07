import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import LogoA from '../../assets/img/logoA.png'
import LogoAdrien from '../../assets/img/logoAdrien.png'
import { Div } from './Sidebar.elements';
import { FaEnvelope, FaHome, FaUser } from 'react-icons/fa'

const Sidebar = () => (
    <Div>
        <Link className="logo" to='/'>
            <img src={LogoA} alt='logo' />
            <img className="sub-logo" src={LogoAdrien} alt='adrien' />
        </Link>
        <nav>
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">
                <FaHome />
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "active about-link" : "about-link" } to="/about">
                <FaUser />
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? "active contact-link" : "contact-link" } to="/contact">
                <FaEnvelope />
            </NavLink>
        </nav>
    </Div>
)
  


export default Sidebar