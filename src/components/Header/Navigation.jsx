import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import NavItem from './NavItem';
import './navigation.scss';

function Navigation({ menuOpen }) {
  const { text } = useLanguage();


  return (
    <nav className="navigation" menu-open={menuOpen ? "open" : "closed"}>
      <ul className="navigation__wrapper">
        <NavItem linkHash="#whatWeDo" navItemName={text.whatWeDo} />
        <NavItem linkHash="#customers" navItemName={text.references} />
        <NavItem linkHash="#contact" navItemName={text.contact} />
      </ul>
    </nav>
  );
}

export default Navigation;
