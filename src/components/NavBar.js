import '../styles/navbar.css'

const NavBar = ({toggleNavigation}) => {
    return ( 
        <div className="navbar">

            <div className="tab-nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact us</li>
                    <li>
                        <button>view projects</button>
                    </li>
                </ul>
            </div>

            <div className="nav-overlay" onClick={toggleNavigation}>
                <div className="navbar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact us</li>
                        <li>
                            <button>view projects</button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
     );
}
 
export default NavBar;