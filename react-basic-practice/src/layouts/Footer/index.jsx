// Import react
import React from 'react';
import { Link } from 'react-router-dom';

// Import components
import Navigation from '@/components/Navigation';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

// Import image
import arrowButton from '@/assets/images/iconButton/btn-arrow.png';
import linkedinLogo from '@/assets/images/socialLogo/linkedin-logo.jpg';
import facebookLogo from '@/assets/images/socialLogo/facebook-logo.png';
import instagramLogo from '@/assets/images/socialLogo/instagram-logo.png';
import twitterLogo from '@/assets/images/socialLogo/twitter-logo.png';

// Import file css
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
          typeButton="button"
          icon={arrowButton}

        />
      </div>
      <div className="footer-social icon">
        <ul className="footer-social list">
          <li className="footer-social item">
            <Link href="/">
              <img src={linkedinLogo} alt="linkedin" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src={facebookLogo} alt="facebook" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src={instagramLogo} alt="instagram" />
            </Link>
          </li>
          <li className="footer-social item">
            <Link href="/">
              <img src={twitterLogo} alt="twitter" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
