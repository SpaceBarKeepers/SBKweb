import React from 'react';
import astronaut from '../../images/icons/aboutUs.png';
import astronautPink from '../../images/icons/aboutUsPink.png'
import home from '../../images/icons/homePageWhite.png';
import homePink from '../../images/icons/homePink.png'
import contact from '../../images/icons/contacts.png';
import contactPink from '../../images/icons/contactsPink.png'
import references from '../../images/icons/referenceWhite.png';
import referencePink from '../../images/icons/referencesPink.png'
import products from '../../images/icons/product.png';
import productsPink from '../../images/icons/productsPink.png'
import './navbar.scss';
import {NavLink} from 'react-router-dom';

function NavbarMobile() {
  return (
    <nav className="navbar_mobile">
      <NavLink exact={"/"} to="/" style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : ""
        };
      }}>
        {({isActive}) => (
          <img className="menuIcon" src={isActive ? homePink : home} alt="ikona domu"/>
        )}
      </NavLink>
      <NavLink to="/codelame" style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : ""
        };
      }}>
        {({isActive}) => (
          <img className="menuIcon" src={isActive ? productsPink : products} alt="ikona ruky"/>
        )}
      </NavLink>
      <NavLink to="/reference" style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : ""
        };
      }}>
        {({isActive}) => (
          <img className="menuIcon" src={isActive ? referencePink : references} alt="ikona konverzace"/>
        )}
      </NavLink>
      <NavLink to="/onas" style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : ""
        };
      }}>
        {({isActive}) => (
          <img className="menuIcon" src={isActive ? astronautPink : astronaut} alt="ikona astronauta"/>
        )}
      </NavLink>
      <NavLink to="/kontakty" style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "white" : ""
        };
      }}>
        {({isActive}) => (
          <img className="menuIcon" src={isActive ? contactPink : contact} alt="ikona zprávy"/>
        )}
      </NavLink>
    </nav>
  );
}

export default NavbarMobile;
