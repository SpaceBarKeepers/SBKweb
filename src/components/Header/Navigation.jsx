import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import NavItem from './NavItem';
import './navigation.scss';

function Navigation({ menuOpen }) {
  const { text } = useLanguage();
  return (
    <nav className="navigation" menu-open={menuOpen ? "open" : "closed"}>
      <ul className="navigation__wrapper">
        <NavItem linkRoute="#whatWeDo" navItemName={text.whatWeDo} />
        <NavItem linkRoute="#customers" navItemName={text.references} />
        <NavItem linkRoute="#contact" navItemName={text.contact} />
      </ul>
    </nav>
  );
}

export default Navigation;
