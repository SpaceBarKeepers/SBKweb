import React, { useState, useEffect, useRef } from 'react';
import Navigation from './Navigation';
import logo from '../../images/logo.png';
import { useWindowSize } from 'react-use';
import Hamburger from './Hamburger';
import { useOnClickOutside } from '../../utils/hooks';

import './header.scss';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const node = useRef();
  const { width } = useWindowSize();
  useOnClickOutside(node, () => setMenuOpen(false));

  useEffect(() => {
    if (width > 900) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [width]);

  return (
    <header className="header">
      <div className="logo__wrapper">
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
