import React from 'react';
import FooterSome from './FooterSome/FooterSome';
import './footer.scss';
import Logo from '../Logo/Logo';

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <div className="footer_contact">
        <a href="mailto:info@spacebarkeepers.com">info@spacebarkeepers.com</a>
        <p>+420&nbsp;601&nbsp;563&nbsp;231</p>
      </div>
      <FooterSome />
  {/*     <div id="changePreferencesWrapper">
        <button id="changePreferences">Změnit nastavení cookies</button>
      </div> */}
    </footer>
  );
}

export default Footer;
