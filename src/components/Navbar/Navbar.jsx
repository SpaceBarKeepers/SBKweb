import React from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <MenuButton
        buttonName={
          <>
            <p className="menuBtnName">Co děláme</p>
          </>
        }
        navTo="/codelame"
      />
      <MenuButton
        buttonName={
          <>
            <p className="menuBtnName">Reference</p>
          </>
        }
        navTo="/reference"
      />
      <MenuButton
        buttonName={
          <>
            <p className="menuBtnName">O nás</p>
          </>
        }
        navTo="/onas"
      />
      <MenuButton
        buttonName={
          <>
            <p className="menuBtnName">Kontakt</p>
          </>
        }
        navTo="/kontakty"
      />
    </nav>
  );
}

export default Navbar;
