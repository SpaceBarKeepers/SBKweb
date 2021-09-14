import React from 'react';
import { useHistory } from 'react-router';
import MenuButton from '../MenuButton/MenuButton';
import astronaut from '../../images/icons/aboutUs.png';
import home from '../../images/icons/homePageWhite.png';
import contact from '../../images/icons/contacts.png';
import references from '../../images/icons/referenceWhite.png';
import logo from '../../images/logo/white_long.png';
import products from '../../images/icons/product.png';
import './navbar.scss';

function Navbar() {
  const { push } = useHistory();
  return (
    <section className="navbar">
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={home} alt="ikona domu" />
            <img className="menuLogo" src={logo} alt="logo" />
          </>
        }
        handleClick={() => push('/')}
      />
      <MenuButton
        buttonName={
          <>
            {' '}
            <img className="menuIcon" src={products} alt="ikona ruky" />
            <p className="menuBtnName">Co děláme</p>{' '}
          </>
        }
        handleClick={() => push('/codelame')}
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={references} alt="ikona konverzace" />
            <p className="menuBtnName">Reference</p>
          </>
        }
        handleClick={() => push('/reference')}
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={astronaut} alt="ikona astronauta" />
            <p className="menuBtnName">O nás</p>
          </>
        }
        handleClick={() => push('/onas')}
      />
      <MenuButton
        buttonName={
          <>
            <img className="menuIcon" src={contact} alt="ikona zprávy" />
            <p className="menuBtnName">Kontakt</p>
          </>
        }
        handleClick={() => push('/kontakty')}
      />
    </section>
  );
}

export default Navbar;
