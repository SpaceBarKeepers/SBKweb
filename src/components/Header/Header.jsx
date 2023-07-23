import React, { useState, useRef } from 'react';
import Navigation from './Navigation';
import logo from '../../images/logo.png';
import Hamburger from './Hamburger';
import { useOnClickOutside } from '../../utils/hooks';

import './header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpen(false));

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
    window.location.hash = '';
  }

  return (
    <header className="header">
      <div className="logo__wrapper" onClick={handleLogoClick}>
        <img src={logo} alt="logo SpaceBarKeepers" />
      </div>
      <div ref={node}>
        <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
}

export default Header;
