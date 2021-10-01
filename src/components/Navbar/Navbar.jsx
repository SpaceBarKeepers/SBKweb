import React from 'react';
import { useHistory } from 'react-router';
import MenuButton from '../MenuButton/MenuButton';
import astronaut from '../../images/icons/aboutUs.png';
import home from '../../images/icons/homePageWhite.png';
import contact from '../../images/icons/contacts.png';
import references from '../../images/icons/referenceWhite.png';
import logo from '../../images/logo/white_long.png';
import products from '../../images/icons/product.png';
import logoShort from '../../images/logo/white_short.svg';
import './navbar.scss';

function Navbar() {
  const { push } = useHistory();
  return (
    <nav className="navbar">
      <MenuButton
        hover="noHover"
        buttonName={
          <>
            <img className="menuIcon" src={home} alt="ikona domu" />
            <img
              style={{ backgroundColor: 'transparent' }}
              className="menuLogo"
              src={logo}
              alt="logo"
            />
            <img className="menuLogo_short" src={logoShort} alt="" />
          </>
        }
        navTo="/"
      />
      <MenuButton
        buttonName={
          <>
            {' '}
            <img className="menuIcon" src={products} alt="ikona ruky" />
            <p className="menuBtnName">Co děláme</p>{' '}
          </>
        }
        navTo="/codelame"
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={references} alt="ikona konverzace" />
            <p className="menuBtnName">Reference</p>
          </>
        }
        navTo="/reference"
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={astronaut} alt="ikona astronauta" />
            <p className="menuBtnName">O nás</p>
          </>
        }
        navTo="/onas"
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={contact} alt="ikona zprávy" />
            <p className="menuBtnName">Kontakt</p>
          </>
        }
        navTo="/kontakty"
      />
    </nav>
  );
}

export default Navbar;
