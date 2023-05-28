import React from 'react';
import './hamburger.scss';

export default function Hamburger({ menuOpen, setMenuOpen }) {
  return (
    <button
      className="hamburger"
      menuOpen={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
