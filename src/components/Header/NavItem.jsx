import React from 'react';
import './navItem.scss';

function NavItem({ linkHash, navItemName }) {
  return (
    <li className="navItem">
      <a href={linkHash}>{navItemName}</a>
    </li>
  );
}

export default NavItem;
