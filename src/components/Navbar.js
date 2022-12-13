import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => { showButton(); }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src='assets/images/GameSpaceLogo.webp' alt='GameSpace logo' className='logo-icon' />
                        GameSpace
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} color='white'></FontAwesomeIcon>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/shop' className='nav-links' onClick={closeMobileMenu}>Shop</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>Blog</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button url='signUp' buttonStyle='btn--outline' >SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
