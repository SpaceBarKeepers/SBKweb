import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/white_long.png';
import './logo.scss';

function Logo() {
  return (
    <Link to="/" className="logo_footer">
      <img src={logo} alt="" />
    </Link>
  );
}

export default Logo;
