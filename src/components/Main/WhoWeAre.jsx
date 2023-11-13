import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './whoWeAre.scss';
import bara from '../../images/bara.png';
import kaja from '../../images/kaja.png';

function WhoWeAre() {
  const { text } = useLanguage();
  return (
    <section className="whoWeAre">
      <h2>{text.whoWeAreTitle}</h2>

      <div className="whoWeAre__flex">
        <p>{text.whoWeAreText}</p>
        <img className="whoWeAre__first" src={kaja} alt="Karel Dohnal" />
        <img src={bara} alt="Bára Marešová" />
      </div>
    </section>
  );
}

export default WhoWeAre;
