import React from 'react';
import './socialMediaLinks.scss';

const SocialMediaLinks = () => (
  <div name="home">
    <div className="iconbar">
      <a className="theme-link theme-transition icon-spacing icon-size-lg" href="http://github.com/cdearden">
        <i className="fa fa-github" aria-hidden="true" />
        <span className="sr-only">github</span>
      </a>
      <a className="theme-link theme-transition icon-spacing icon-size-lg" href="http://linkedin.com/in/cdearden">
        <i className="fa fa-linkedin" aria-hidden="true" />
        <span className="sr-only">linkedin</span>
      </a>
    </div>
  </div>
);

export default SocialMediaLinks;
