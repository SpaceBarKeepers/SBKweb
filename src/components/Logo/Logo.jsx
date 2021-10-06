import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/white_long.png';
import logoShort from '../../images/logo/white_short.svg';
import './logo.scss';

function Logo() {
  return (
    <Link to="/" className="logo_footer">
      <img className="logo_footer_long" src={logo} alt="" />
      <img className="logo_footer_short" src={logoShort} alt="" />
    </Link>
  );
}

export default Logo;
