import React from 'react';
import logo from '../../images/logo/white_long.svg';

import './header.scss';

export const Header = () => {
  return (
    <div className="header_div_mobile">
      <div className="logoMenu_div">
        <a href="/">
          <img src={logo} alt="logo spacebarkeepers" className="logo" />
        </a>
      </div>
    </div>
  );
};
