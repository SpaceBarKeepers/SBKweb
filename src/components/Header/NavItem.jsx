import React from 'react';
import { Link } from 'react-router-dom';
import './navItem.scss';

function NavItem({ linkRoute, navItemName }) {
  return (
    <li className="navItem">
      <Link to={linkRoute}>{navItemName}</Link>
    </li>
  );
}

export default NavItem;
