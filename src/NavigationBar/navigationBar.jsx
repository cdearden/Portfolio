import React from 'react';
import './navigationBar.scss';


const NavigationBar = () => (
  <nav id="nav" className="mainNavbar">
    <a name="home" className="theme-link theme-transition navLink" href="#home">Home</a>
    <a name="about" className="theme-link theme-transition navLink" href="#about">About</a>
    <a name="apps" className="theme-link theme-transition navLink" href="#apps">Apps</a>
    <a name="contact" className="theme-link theme-transition navLink" href="#contact">Contact</a>
  </nav>
);

export default NavigationBar;
