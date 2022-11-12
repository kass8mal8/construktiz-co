import '../assets/styles/header.css'
import logo from '../assets/images/Logo.svg'
import NavBar from './NavBar';

const Header = () => {
    return ( 
        <div className='header'>
            <ul>
                <li> 
                    <img src={logo} alt="logo" className='logo'/> 
                </li>
                <li className = 'hiring'>
                    <button >Hoster is hiring!</button> 
                </li>
                <NavBar />
            </ul>
        </div>
     );
}
 
export default Header;