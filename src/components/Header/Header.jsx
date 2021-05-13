import React, { useState } from 'react';
import logo from '../../images/logo/white_long.svg';
import { Products } from '../Products/Products';
import { References } from '../References/References';
import { Contacts } from '../Contacts/Contacts';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Graphics } from '../Graphics/Graphics';

import './header.scss';
import MenuButton from '../MenuButton/MenuButton';

export const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="header_div">
      <div className="logoMenu_div">
        <a href="/home" onClick={(e) => setActiveSection('home')}>
          <img src={logo} alt="logo spacebarkeepers" className="logo" />
        </a>
        <div className="menu">
          <div className="menu_left">
            <MenuButton buttonRoute="products" buttonName="Produkty" />
            <MenuButton buttonRoute="references" buttonName="Reference" />
          </div>
          <div className="menu_right">
            <MenuButton buttonRoute="aboutus" buttonName="O nás" />
            <MenuButton buttonRoute="contacts" buttonName="Kontakty" />
          </div>
        </div>
      </div>
      <div className="main">
        {activeSection === 'home' ? <Home /> : null}
        {activeSection === 'products' ? (
          <>
            <Graphics />
            <Products />
          </>
        ) : null}
        {activeSection === 'references' ? (
          <>
            <Graphics />
            <References />
          </>
        ) : null}
        {activeSection === 'contacts' ? (
          <>
            <Graphics />
            <Contacts />
          </>
        ) : null}
        {activeSection === 'about' ? (
          <>
            <Graphics />
            <About />
          </>
        ) : null}
      </div>
    </div>
  );
};
