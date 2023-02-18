import { NavLink, Link } from "react-router-dom";
import { Div, Icons, Line, LogoTop, Nav } from './Sidebar.elements';
// ICONS
import { Github, Instagram, Linkedin, Twitter } from "../../assets/SVGComponents";
import { MdClose } from 'react-icons/md';
import { RiHome2Line } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { GiGearHammer } from 'react-icons/gi';
import { useTranslation } from "react-i18next";
import { FaBars, FaRegEnvelope, FaRegUser, FaSuitcase } from "react-icons/fa";
import { motion } from "framer-motion";

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
            <LogoTop>
                AD
            </LogoTop>
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

        <Icons
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1}}
            >
                <NavLink target="_blank" to={{pathname:"https://github.com/adrien-dubois"}}>
                    <Github width={25} height={25} fill={'#4d4d4e'} />
                </NavLink>
            </motion.div>
            <motion.div
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.2}}
            >
                <NavLink target="_blank" to={{pathname:"https://twitter.com/AdrienDuboisDev"}}>
                    <Twitter width={25} height={25} fill={'#4d4d4e'} />
                </NavLink>
            </motion.div>
            <motion.div
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.4}}
            >
                <NavLink target="_blank" to={{pathname:"https://www.linkedin.com/in/adrien-dubois-03/"}}>
                    <Linkedin width={25} height={25} fill={'#4d4d4e'} />
                </NavLink>
            </motion.div>
            <motion.div
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', duration:1, delay:1.6}}
            >
                <NavLink target="_blank" to={{pathname:"https://www.instagram.com/ad_dubois/"}}>
                    <Instagram width={25} height={25} fill={'#4d4d4e'} />
                </NavLink>
            </motion.div>

            <Line 
                color="#4d4d4e"
                initial={{height: 0}}
                animate={{height: '8rem'}}
                transition={{type:'spring', duration:1, delay:0.8}}
            />

        </Icons>
        
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