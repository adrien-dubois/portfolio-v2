import { NavLink, Link } from "react-router-dom";
import { Div } from './Sidebar.elements';
// IMAGES
import LogoA from '../../assets/img/logoA.png';
import LogoAdrien from '../../assets/img/logoAdrien.png';
// ICONS
import { FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaRegUser, FaTwitter } from 'react-icons/fa';
import { RiHome2Line } from 'react-icons/ri';

const Sidebar = () => (
    <Div>

        {/* LOGO */}
        <Link className="logo" to='/'>
            <img src={LogoA} alt='logo' />
            <img className="sub-logo" src={LogoAdrien} alt='adrien' />
        </Link>

        {/* NAVIGATION */}
        <nav>

            {/* HOME LINK */}
            <NavLink className={(navData) => navData.isActive ? "active" : "" } to="/">
                <RiHome2Line />
            </NavLink>

            {/* ABOUT LINK */}
            <NavLink className={(navData) => navData.isActive ? "active about-link" : "about-link" } to="/about">
                <FaRegUser />
            </NavLink>

            {/* CONTACT LINK */}
            <NavLink className={(navData) => navData.isActive ? "active contact-link" : "contact-link" } to="/contact">
                <FaRegEnvelope />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a
                    target="_blank"
                    rel="noreferrer" 
                    href=" #"
                >
                    <FaLinkedin/>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer" 
                    href=" #"
                >
                    <FaGithub/>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer" 
                    href=" #"
                >
                    <FaTwitter/>
                </a>
            </li>

            <li>
                <a
                    target="_blank"
                    rel="noreferrer" 
                    href=" #"
                >
                    <FaInstagram/>
                </a>
            </li>


        </ul>
    </Div>
)
  


export default Sidebar