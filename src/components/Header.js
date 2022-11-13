import '../assets/styles/header.css'
import logo from '../assets/images/Logo.svg'
import NavBar from './NavBar';
import menu from '../assets/images/icon-hamburger.svg'

const Header = () => {
    const showMenu =()=> {
        document.querySelector('.navigation').classList.toggle('active')
        document.querySelector('.overlay').classList.toggle('active')
    }
    return ( 
        <div className='header'>
            <ul>
                <li> 
                    <img src={logo} alt="logo" className='logo'/> 
                </li>
                <li className = 'hiring'>
                    <button >Hoster is hiring!</button> 
                </li>
                <li>
                    <img 
                        src={menu} 
                        alt="hamburger-icon"
                        className='menu'
                        onClick={showMenu}/>
                </li>
                <NavBar />
            </ul>
        </div>
     );
}
 
export default Header;