import React, { useRef }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';
import logo from '../redux.png'
import cartL from '../images/bag-icon.svg'
import { Link  , NavLink} from 'react-router-dom'


const Header = () => {
    const navbar = useRef(null)
    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        
                        <Link to="/" className="logo">
                        <h4><img src={logo} alt='Redux-Shopping' className='lmj-logo' />Redux Shopping Cart</h4>
                        </Link>
                        <ul ref={navbar} className="navbar">
                            <li>
                                <NavLink to="/Casques">Casques</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Souris">Souris</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Clavier">Clavier</NavLink>
                            </li>

                        </ul>

                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <img src={cartL} alt="bag-icon" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;