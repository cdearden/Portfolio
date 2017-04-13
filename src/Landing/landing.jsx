import React from 'react';
import NavigationBar from '../NavigationBar/navigationBar';
import Title from '../Title/title';
import BackgroundVideo from '../BackgroundVideo/backgroundVideo';
import SocialMediaLinks from '../SocialMediaLinks/socialMediaLinks';
import MyButton from '../MyButton/myButton';
import './landing.scss';

const Landing = () => (
  <section className="container-fluid text-center landing" >
    <NavigationBar />
    <BackgroundVideo />
    <Title />
    <SocialMediaLinks />
    <MyButton />
  </section>
);

export default Landing;
