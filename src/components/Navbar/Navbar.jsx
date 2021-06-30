import React from 'react';
import { useHistory } from 'react-router';
import MenuButton from '../MenuButton/MenuButton';
import astronaut from '../../images/icons/astronaut.svg';
import home from '../../images/icons/home.svg';
import contact from '../../images/icons/contact.svg';
import references from '../../images/icons/references.svg';
import products from '../../images/icons/products.svg';
import './navbar.scss';

function Navbar() {
  const { push } = useHistory();
  return (
    <section className="navbar_mobile">
      <MenuButton
        buttonName={<img src={home} alt="ikona domu" />}
        handleClick={() => push('/')}
      />
      <MenuButton
        buttonName={<img src={products} alt="ikona ruky" />}
        handleClick={() => push('/codelame')}
      />
      <MenuButton
        buttonName={<img src={references} alt="ikona konverzace" />}
        handleClick={() => push('/reference')}
      />
      <MenuButton
        buttonName={<img src={astronaut} alt="ikona astronauta" />}
        handleClick={() => push('/onas')}
      />
      <MenuButton buttonName={<img src={contact} alt="ikona zprávy" />} />
    </section>
  );
}

export default Navbar;
