import React from 'react';
import './navItem.scss';

function NavItem({ linkHash, navItemName }) {

  const handleClick = (hash) => () => {
    window.location.hash = hash;
  }

  return (
    <li className="navItem" onClick={handleClick(linkHash)}>
      <button onClick={handleClick(linkHash)}>{navItemName}</button>
    </li>
  );
}

export default NavItem;
