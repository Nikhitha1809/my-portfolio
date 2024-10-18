import React, { useState } from 'react';
import './NavbarComp.css';

function NavbarComp({ onScrollToExperience, onScrollToSkills, onScrollToProjects, onScrollToContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  // Function to handle both scrolling and closing the menu
  const handleMenuClick = (scrollFunc) => {
    scrollFunc();         // Call the scroll function
    closeMenu();          // Close the menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Nikhitha Chilukuri</p>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navbar links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li className='link'>Home</li>
        <li className='link' onClick={() => handleMenuClick(onScrollToExperience)}>Experience</li>
        <li className='link' onClick={() => handleMenuClick(onScrollToSkills)}>Skills</li>
        <li className='link' onClick={() => handleMenuClick(onScrollToProjects)}>Projects</li>
        <li className='link' onClick={() => handleMenuClick(onScrollToContact)}>Contact</li>
      </ul>
    </nav>
  );
}

export default NavbarComp;
