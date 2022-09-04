import { NavLink, Link } from "react-router-dom";
import { Div, Nav } from './Sidebar.elements';
// IMAGES
import LogoA from '../../assets/img/logoA.png';
import LogoAdrien from '../../assets/img/logoAdrien.png';
// ICONS
import { FaBars, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope, FaRegUser, FaSuitcase, FaTwitter } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { GiGearHammer } from 'react-icons/gi';
import { useTranslation } from "react-i18next";

const Sidebar = () => {

    const [showNav, setShowNav] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        if(showNav === true) {
            document.body.style.overflow = 'hidden';
        }
        if(showNav === false){
            document.body.style.overflow = 'unset';
        }
    }, [showNav])

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
                data-text={t('Sidebar.Home')}
            >
                <RiHome2Line />
            </NavLink>

            {/* ABOUT LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active about-link" : "about-link" } to="/about"
                data-text={t('Sidebar.About')}
            >
                <FaRegUser />
            </NavLink>


            {/* SKILLS LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active skills-link" : "skills-link" } to="/skills"
                data-text={t('Sidebar.Skills')}
            >
                <GiGearHammer />
            </NavLink>

            {/* PROJECTS LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active projects-link" : "projects-link" } to="/projects"
                data-text={t('Sidebar.Work')}
            >
                <FaSuitcase />
            </NavLink>

            {/* CONTACT LINK */}
            <NavLink
                onClick={() => setShowNav(false)} 
                className={(navData) => navData.isActive ? "active contact-link" : "contact-link" } to="/contact"
                data-text={t('Sidebar.Contact')}
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