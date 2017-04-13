import React from 'react';
import './navigationBar.scss';


const NavigationBar = () => (
  <nav className="mainNavbar">
    <a name="home" className="navLink" href="#home">Home</a>
    <a name="about" className="navLink" href="#about">About</a>
    <a name="apps" className="navLink" href="#apps">Apps</a>
    <a name="contact" className="navLink" href="#contact">Contact</a>
  </nav>
);

export default NavigationBar;
