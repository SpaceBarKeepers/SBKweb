import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo/white_long.png';

import './header.scss';

export const Header = ({logoType}) => {
  return (
    <div className="header_div_mobile">
      <Link to="/">
        <div className="logoMenu_div">
          <img src={logo} alt="logo spacebarkeepers" className={logoType === "homepage" ? "logoHomepage" : "logo"}/>
        </div>
      </Link>
    </div>
  );
};
