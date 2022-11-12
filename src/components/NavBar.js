const NavBar = () => {
    return ( 
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
     );
}
 
export default NavBar;