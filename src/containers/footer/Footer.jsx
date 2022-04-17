import React from 'react';
import Logo from '../../assets/logoz.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={Logo} alt="gpt3_logo" />
        <p>Showing The World, How AI is Shaping Our Behaviour and Thinking.</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h2>Links</h2>
        <p>ABOUT US</p>
        <p>CAREERS</p>
        <p>LINKEDIN</p>
        <p>TWITTER</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h2>Company</h2>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Cookie Policy</p>
      </div>
      <div className="gpt3__footer-links_add">
        <h2>Get in touch</h2>
        <p>66 Sodra Kungsvagen, Lidingo, Greater Stockholm</p>
        <p>+46 08-767 00 70</p>
        <p>info@fut_int.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>&#xa9;2022&nbsp;Fut-Int. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
