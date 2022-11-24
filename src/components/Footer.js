import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Button } from './Button';
import './Footer.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="main">
                <div className='nav'>
                    <ul className="links" >
                        <li><Link to='/' className="link">Home</Link></li>
                        <li><Link to='/shop' className="link">Shop</Link></li>
                        <li><Link to='/news' className="link">News</Link></li>
                        <li><Link to='/about' className="link">About</Link></li>
                    </ul>
                    <Button url='signUp' buttonStyle='btn--outline' >SIGN UP</Button>
                </div>
                <div className="address">
                    <h4>Our Address</h4>
                    <address >
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        +852 1234 5678<br />
                        +852 8765 4321<br />
                        <a href="mailto:support@gamespace.net" className="link">
                            support@gamespace.net</a>
                    </address>
                </div>
                <div className="socialmedia" >
                    <h4>Follow</h4>
                    <div>
                        <a className="btn" href="http://twitter.com/"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        <a className="btn" href="http://www.facebook.com/profile.php?id="><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                        <a className="btn" href="http://www.linkedin.com/in/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                        <a className="btn" href="http://youtube.com/"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
                        <a className="btn" href="mailto:"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="copyright">
                <div>
                    <p>© Copyright 2022 GameSpace ltd.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;