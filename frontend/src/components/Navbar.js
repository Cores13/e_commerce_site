import './Navbar.css';
import {Link} from 'react-router-dom';

const NavBar = ({click}) => {
    return (
        <nav className='navbar'>

            <div className='navbar__logo'>
                <h2>MERN Shopping cart</h2>
            </div>

            <ul className='navbar__links'>
                <li>
                    <Link to='/cart' className='cart__link'>
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

            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
};

export default NavBar
