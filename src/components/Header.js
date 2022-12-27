import "../styles/header.css"
import bg_image from "../images/head-bg.jpg"
import logo from "../images/logo.png"
import NavBar from "./NavBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const toggleNavigation = () => {
        document.querySelector('.nav-overlay').classList.toggle('active')
    }

    return (  
        <div className="header">

            <div className="header-intro">
                <img src={logo} alt="logo" width="40" />
                <li className="logo-text">BuildIX</li>
                <FontAwesomeIcon 
                    icon={faBars} 
                    className="menu"
                    onClick={toggleNavigation}/>
                <NavBar toggleNavigation = {toggleNavigation}/>
            </div>

            <div className="header-text">
                <div className="overlay">
                    <img src={bg_image} alt="bg" />
                </div>
                <div className="text">
                    <p className="h3">We have a passion in creating new and unique spaces.</p>
                    <p>See how a 10 stories tower's being built in a time lapse!</p>

                    <button>VIEW PROJECTS</button>
                    <aside>CONTACT US</aside>
                </div>
            </div>

        </div>
    );
}
 
export default Header;