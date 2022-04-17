import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import Logo from '../../assets/logoz.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <img src={Logo} />
      <h1 className="gradient__text">The Possibilities are <br /> Beyond Your Imagination</h1>
      <p>Many organizations have begun to use AR/VR for design-build manufacturing. The race continues between the world’s largest tech leaders and companies to see which one will prevail and power the next generation of tools, technologies and resources for manufacturing, healthcare, construction, and many other vertical market applications.</p>
      <h4>Request Early Access to Get Started.</h4>
    </div>
  </div>
);

export default Possibility;
