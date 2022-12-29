import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">
          CONTACT
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          TERMS OF SERVICES
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/">
          SHIPPING AND RETURNS
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
