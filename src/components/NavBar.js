const NavBar = () => {
    const closeNav = () => {
        document.querySelector('.navigation').classList.toggle('active')
        document.querySelector('.overlay').classList.toggle('active')
    }
    return ( 
        <div className="overlay" onClick={closeNav}>
            <div className="navigation">
                <aside className="nav-links">
                    <li>Plans</li>
                    <li>Find Domain</li>
                    <li>Why Hosterr</li>
                </aside>
                <aside className="nav-waitlist">
                    <li>Sign in</li>
                    <li>
                        <button>Join Waitlist</button>
                    </li>
                </aside>
            </div>
        </div>
     );
}
 
export default NavBar;