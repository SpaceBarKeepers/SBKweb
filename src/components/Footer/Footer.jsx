import React from 'react';

import FooterSome from './FooterSome/FooterSome';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_contact">
        <a href="mailto:info@spacebarkeepers.com">info@spacebarkeepers.com</a>
        <p>+420 601 563 231</p>
      </div>
      <FooterSome />
    </footer>
  );
}

export default Footer;
