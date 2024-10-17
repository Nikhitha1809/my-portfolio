import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link if you're using React Router for navigation
import './NavbarComp.css';
function NavbarComp({ onScrollToExperience, onScrollToSkills, onScrollToProjects, onScrollToContact }) {
  return (
    <nav className="navbar">
            <div className="navbar-logo">
                <p>Nikhitha Chilukuri</p>
            </div>
            <ul className="navbar-links">
                <li className='link'>Home</li>
                <li className='link' onClick={onScrollToExperience}>Experience</li>
                <li className='link' onClick={onScrollToSkills}>Skills</li>
                <li className='link' onClick={onScrollToProjects}>Projects</li>
                <li className='link'onClick={onScrollToContact}>Contact</li>
            </ul>
        </nav>
  );
}



export default NavbarComp;