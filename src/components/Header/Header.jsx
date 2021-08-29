import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/white_long.svg';

import './header.scss';

export const Header = () => {
  return (
    <div className="header_div_mobile">
      <div className="logoMenu_div">
        <Link to="/">
          <img src={logo} alt="logo spacebarkeepers" className="logo" />
        </Link>
      </div>
    </div>
  );
};
