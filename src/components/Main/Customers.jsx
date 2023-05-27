import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './customers.scss';
import dkck from '../../images/dkck.png';
import letokruh from '../../images/letokruh.png';
import skp from '../../images/skp.png';
import servantes from '../../images/servantes.png';

function Customers() {
  const { text } = useLanguage();
  return (
    <section className="customers">
      <h2>{text.customers}</h2>
      <div className="customers__wrapper">
        <a
          className="customers__logo"
          href="https://servantes.cz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={servantes} alt="logo Servantes" />
        </a>
        <a
          className="customers__logo"
          href="https://letokruh.eu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={letokruh} alt="logo Letokruh" />
        </a>{' '}
        <a
          className="customers__logo"
          href="https://damskyklubck.cz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dkck} alt="logo Dámský klub Český Krumlov" />
        </a>
        <a
          className="customers__logo"
          href="https://jkakaratejirkov.cz"
          target="_blank"
          rel="noreferrer"
        >
          <img src={skp} alt="logo SKP Hvězda Jirkov" />
        </a>
      </div>
    </section>
  );
}

export default Customers;
