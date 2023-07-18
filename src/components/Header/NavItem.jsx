import React from 'react';
import './navItem.scss';

function NavItem({ linkRoute, navItemName }) {
  return (
    <li className="navItem">
      <a href={linkRoute}>{navItemName}</a>
    </li>
  );
}

export default NavItem;
