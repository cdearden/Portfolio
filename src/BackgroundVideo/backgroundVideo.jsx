import React from 'react';
import './backgroundVideo.scss';

const BackgroundVideo = () => (
  <div className="backgroundVideo">
    <video id="video" loop muted autoPlay poster="" className="video">
      <source id="source" src="videos/working.mp4" type="video/mp4" />
    </video>
    <div className="videoOverlay" />
  </div>
);

export default BackgroundVideo;
