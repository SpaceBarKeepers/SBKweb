import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import design from '../../images/design.svg';
import backend from '../../images/backend.svg';
import support from '../../images/maintenance.svg';
import web from '../../images/web.svg';
import "./services.scss"

function Services() {
  const { text } = useLanguage();

  return (
    <section className="services">
      <h2>{text.services.title}</h2>
      <div className="services__wrapper">
        <div className="services__item">
          <img src={design} alt="design" />
          <p>{text.services.design}</p>
        </div>
        <div className="services__item">
          <img src={web} alt="webová stránka" />
          <p>{text.services.web}</p>
        </div>
        <div className="services__item">
          <img src={backend} alt="backend" />
          <p>{text.services.backend}</p>
        </div>
        <div className="services__item">
          <img src={support} alt="správa" />
          <p>{text.services.support}</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
