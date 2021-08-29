import React from 'react';
import { useHistory } from 'react-router';
import MenuButton from '../MenuButton/MenuButton';
import astronaut from '../../images/icons/astronaut.png';
import home from '../../images/icons/home2.png';
import contact from '../../images/icons/contact.png';
import references from '../../images/icons/references.png';
import logo from '../../images/logo/white_long.svg';
import products from '../../images/icons/products.png';
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
