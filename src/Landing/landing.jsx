import React from 'react';
import Title from '../Title/title';
import BackgroundVideo from '../BackgroundVideo/backgroundVideo';
import SocialMediaLinks from '../SocialMediaLinks/socialMediaLinks';
import MyButton from '../MyButton/myButton';
import './landing.scss';

const Landing = () => (
  <section className="landing" >
    <BackgroundVideo />
    <div className="landing-content text-center text-clr-primary font-cormorant" >
      <Title />
      <SocialMediaLinks />
      <MyButton />
    </div>
  </section>
);

export default Landing;
