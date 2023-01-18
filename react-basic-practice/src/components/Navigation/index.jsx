// import react
import React from 'react';
import { Link } from 'react-router-dom';

// import constants
import ROUTE from '@/constants/route';

// import file css
import './index.css';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to={ROUTE.HOMEPAGE}>
          CONTACT
        </Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTE.HOMEPAGE}>
          TERMS OF SERVICES
        </Link>
      </li>
      <li className="nav-item">
        <Link to={ROUTE.HOMEPAGE}>
          SHIPPING AND RETURNS
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
