import './Navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            {/* logo */}
            <div className='navbar_logo'>
                <h2>MERN Shopping cart</h2>
            </div>

            {/* links */}
            <ul className='navbar_links'>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        Cart
                        <span className='cartlogo__badge'>0</span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className='hamburger__menu'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default NavBar
