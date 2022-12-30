import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

const Footer = () => (
  <Footer>
    <div className="footer-action">
      <Navigation />
      <p>
        <span>© 2021 Shelly</span>
        . Terms of use
        <span>and</span>
        privacy policy.
      </p>
    </div>
    <div className="footer-social">
      <div className="footer-social email">
        <Input placeholder="Give an email, get the newsletter." />
        <Button
          className="btn-arrow"
          icon=""
        />
      </div>
      <div className="footer-social icon">
        <ul className="footer-social list">
          <li className="footer-social item">
            <Link href="/">
              <img src="../../assets/images/socialLogo/linkedin-logo.jpg" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="../../assets/images/socialLogo/facebook-logo.png" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="../../assets/images/socialLogo/instagram-logo.png" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="../../assets/images/socialLogo/twitter-logo.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

export default Footer;
