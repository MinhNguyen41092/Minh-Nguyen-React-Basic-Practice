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
        <Input />
        <Button />
      </div>
      <div className="footer-social icon">
        <ul>
          <li>
            <Link href="/">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="" alt="" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <img src="" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </Footer>
);

export default Footer;
