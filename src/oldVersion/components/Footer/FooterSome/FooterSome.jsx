import React from 'react';
import fb from '../../../images/icons/fb.svg';
import li from '../../../images/icons/li.svg';
import twitter from '../../../images/icons/twitter.svg';
import ig from '../../../images/icons/ig.svg';

function FooterSome() {
  return (
    <div className="footer_some">
      <a className="footer_someLink" href="https://www.facebook.com/spacebarkeepers/" target="_blank" rel="noreferrer">
        <img src={fb} alt="facebook logo" />
      </a>
      <a className="footer_someLink" href="https://twitter.com/spacebarkeepers" target="_blank" rel="noreferrer">
        <img src={twitter} alt="twitter logo" />
      </a>
      <a
        className="footer_someLink"
        href="https://www.linkedin.com/company/space-bar-keepers"
        target="_blank"
        rel="noreferrer"
      >
        <img src={li} alt="linkedin logo" />
      </a>
      <a className="footer_someLink" href="https://www.instagram.com/spacebarkeepers/" target="_blank" rel="noreferrer">
        <img src={ig} alt="instagram logo" />
      </a>
    </div>
  );
}

export default FooterSome;
