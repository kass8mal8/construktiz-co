import "../styles/footer.css"
import logo from "../images/logo.png"
import twitter from "../images/twitter.svg"
import fb from "../images/facebook.svg"
import IG from "../images/instagram.svg"
import pinterest from "../images/pinterest.svg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="logo-ft">
                <img src={logo} alt="logo" width="40"/>
                <p>[Company Location]</p>
            </div>
            <div className="social-media">
                
                <ul>
                    <li>
                        <img src={twitter} alt="twitter" />
                    </li>

                    <li>
                        <img src={fb} alt="facebook" />
                    </li>

                    <li>
                        <img src={IG} alt="instagram" />
                    </li>

                    <li>
                        <img src={pinterest} alt="pinterest" />
                    </li>
                </ul>

                <p>email@example.com</p>
                <p>+254123456789</p>

            </div>
            
        </div>
     );
}
 
export default Footer;