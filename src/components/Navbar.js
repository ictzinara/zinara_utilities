import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo_icon from '../images/icon.png';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo' src={logo_icon} alt="Zinara Utilities" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                   <Link to='/tollgates' className='nav-links'>
            <i className='fas fa-calculator' /> <span>__</span> Tollgate Calculator 
          </Link> 
          <Link to='/vehicles' className='nav-links'>
            <i className='fas fa-car' /> <span>__</span> Vehicle Registration 
          </Link> 
          </ul>
           </div>
      </nav>
    </>
  );
}

export default Navbar;