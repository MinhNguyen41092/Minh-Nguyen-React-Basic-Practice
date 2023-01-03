import React from 'react';
import { Link } from 'react-router-dom';
// import Navigation from '../../components/Navigation';
import Navigation from '@/components/Navigation';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';

import './index.css';

const Footer = () => (
  <footer className="footer-wrapper">
    <div className="footer-action">
      <Navigation />
      <p className="footer-introduction">
        <span>© 2021 Shelly</span>
        . Terms of use
        <span> and </span>
        privacy policy.
      </p>
    </div>
    <div className="footer-social">
      <div className="footer-social email">
        <Input
          className="input-email"
          placeholder="Give an email, get the newsletter."
        />
        <Button
          className="btn-arrow"
          type="button"
          icon="./src/assets/images/iconButton/btn-arrow.png"
        />
      </div>
      <div className="footer-social icon">
        <ul className="footer-social list">
          <li className="footer-social item">
            <Link href="/">
              <img src="./src/assets/images/socialLogo/linkedin-logo.jpg" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="./src/assets/images/socialLogo/facbook-logo.png" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="./src/assets/images/socialLogo/instagram-logo.png" alt="" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src="./src/assets/images/socialLogo/twitter-logo.png" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
