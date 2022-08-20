import { NavLink, Link } from "react-router-dom";
import { Div, Nav } from './Sidebar.elements';
// IMAGES
import LogoA from '../../assets/img/logoA.png';
import LogoAdrien from '../../assets/img/logoAdrien.png';
// ICONS
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaRegUser, FaSuitcase, FaTwitter } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { useState } from "react";

const Sidebar = () => {

    const [showNav, setShowNav] = useState<boolean>(false);

   return ( 
   <Div>

        {/* LOGO */}
        <Link className="logo" to='/'>
            <img src={LogoA} alt='logo' />
            <img className="sub-logo" src={LogoAdrien} alt='adrien' />
        </Link>

        {/* NAVIGATION */}
        <Nav 
            className={ showNav ? 'mobile-show' : '' }  
        >

            {/* HOME LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active" : "" } to="/"
            >
                <RiHome2Line />
            </NavLink>

            {/* ABOUT LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active about-link" : "about-link" } to="/about"
            >
                <FaRegUser />
            </NavLink>

            {/* PROJECTS LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active projects-link" : "projects-link" } to="/projects"
            >
                <FaSuitcase />
            </NavLink>

            {/* CONTACT LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active contact-link" : "contact-link" } to="/contact"
            >
                <FaRegEnvelope />
            </NavLink>

            <MdClose
                color='var(--primary-color)' 
                size="30px" 
                className="close-icon"
                onClick={() => setShowNav(false)}
            />

        </Nav>

        {/* SOCIAL NETWORKS */}
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
        <FaBars 
            onClick={() => setShowNav(true)}
            color='var(--primary-color)' 
            size="30px" 
            className="hamburger-icon"
        />
    </Div>
    
    )
}
  


export default Sidebar