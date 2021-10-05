import React from 'react';
import { useHistory } from 'react-router';
import astronaut from '../../images/icons/aboutUs.png';
import home from '../../images/icons/homePageWhite.png';
import contact from '../../images/icons/contacts.png';
import references from '../../images/icons/referenceWhite.png';
import products from '../../images/icons/product.png';
import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';

function NavbarMobile() {
  return (
    <nav className="navbar_mobile">
      <Link to="/">
        <img className="menuIcon" src={home} alt="ikona domu" />
      </Link>
      <NavLink to="/codelame" activeStyle={{}}>
        <img className="menuIcon" src={products} alt="ikona ruky" />
      </NavLink>
      <NavLink to="/reference">
        <img className="menuIcon" src={references} alt="ikona konverzace" />
      </NavLink>
      <NavLink to="/onas">
        <img className="menuIcon" src={astronaut} alt="ikona astronauta" />
      </NavLink>
      <NavLink to="/kontakty">
        <img className="menuIcon" src={contact} alt="ikona zprávy" />
      </NavLink>
    </nav>
  );
}

export default NavbarMobile;
