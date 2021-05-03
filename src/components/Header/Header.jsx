import React, { useState } from 'react';
import logo from '../../images/logo/white_long.svg';
import { Products } from '../Products/Products';
import { References } from '../References/References';
import { Contacts } from '../Contacts/Contacts';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Graphics } from '../Graphics/Graphics';

import './header.scss';

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
            <div
              className={
                activeSection === 'products'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('products')}
            >
              Produkty
            </div>
            <div
              className={
                activeSection === 'references'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('references')}
            >
              Reference
            </div>
          </div>
          <div className="menu_right">
            <div
              className={
                activeSection === 'about'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('about')}
            >
              O nás
            </div>
            <div
              className={
                activeSection === 'contacts'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('contacts')}
            >
              Kontakty
            </div>
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
