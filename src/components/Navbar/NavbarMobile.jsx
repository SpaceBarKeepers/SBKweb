import React, {useState} from 'react';
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
  const [activeLink, setActiveLink] = useState("")
  return (
    <nav className="navbar_mobile">
      <NavLink exact to="/" activeStyle={{backgroundColor: "white"}} isActive={(match) => {
        if (match) {
          setActiveLink("")
        }
        return match;
      }}>
        <img className="menuIcon" src={activeLink === "" ? homePink : home} alt="ikona domu"/>
      </NavLink>
      <NavLink to="/codelame" activeStyle={{backgroundColor: "white"}} isActive={(match) => {
        if (match) {
          setActiveLink("codelame")
        }
        return match;
      }}>
        <img className="menuIcon" src={activeLink === "codelame" ? productsPink : products} alt="ikona ruky"/>
      </NavLink>
      <NavLink to="/reference" activeStyle={{backgroundColor: "white"}} isActive={(match) => {
        if (match) {
          setActiveLink("reference")
        }
        return match;
      }}>
        <img className="menuIcon" src={activeLink === "reference" ? referencePink : references} alt="ikona konverzace"/>
      </NavLink>
      <NavLink to="/onas" activeStyle={{backgroundColor: "white"}} isActive={(match) => {
        if (match) {
          setActiveLink("onas")
        }
        return match;
      }}>
        <img className="menuIcon" src={activeLink === "onas" ? astronautPink : astronaut} alt="ikona astronauta"/>
      </NavLink>
      <NavLink to="/kontakty" activeStyle={{backgroundColor: "white"}} isActive={(match) => {
        if (match) {
          setActiveLink("kontakty")
        }
        return match;
      }}>
        <img className="menuIcon" src={activeLink === "kontakty" ? contactPink : contact} alt="ikona zprávy"/>
      </NavLink>
    </nav>
  );
}

export default NavbarMobile;
