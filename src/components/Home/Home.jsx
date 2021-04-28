import React, { useState } from 'react';
import logo from '../../images/logo/white_long.svg';
import { Products } from '../Products/Products';
import { References } from '../References/References';
import { Contacts } from '../Contacts/Contacts';
import './home.scss';

export const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="home_div">
      <div className="header_div">
        <img
          src={logo}
          alt="logo spacebarkeepers"
          className="logo"
          onClick={(e) => setActiveSection('home')}
        />
        <div className="menu">
          <div className="menu_left">
            <div
              className={
                activeSection === 'products'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('')}
            >
              Produkty
            </div>
            <div
              className={
                activeSection === 'references'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('')}
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
              onClick={(e) => setActiveSection('')}
            >
              O nás
            </div>
            <div
              className={
                activeSection === 'contacts'
                  ? 'active_button menu_buttons'
                  : 'menu_buttons'
              }
              onClick={(e) => setActiveSection('')}
            >
              Kontakty
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        {activeSection === 'home' ? <div className="chairs"></div> : null}
        {activeSection === 'products' ? <Products /> : null}
        {activeSection === 'references' ? <References /> : null}
        {activeSection === 'contacts' ? <Contacts /> : null}
      </div>
    </div>
  );
};
