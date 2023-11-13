import React from 'react';
import './hamburger.scss';

export default function Hamburger({ menuOpen, setMenuOpen }) {
  return (
    <button
      className="hamburger"
      menu-open={menuOpen ? "open" : "closed"}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span menu-open={menuOpen ? "open" : "closed"}></span>
      <span menu-open={menuOpen ? "open" : "closed"}></span>
      <span menu-open={menuOpen ? "open" : "closed"}></span>
      <span menu-open={menuOpen ? "open" : "closed"}></span>
    </button>
  );
}
