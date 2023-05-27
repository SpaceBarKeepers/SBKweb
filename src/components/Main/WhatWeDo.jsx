import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './whatWeDo.scss';

function WhatWeDo() {
  const { text } = useLanguage();

  return (
    <section className="whatWeDo">
      <h2>{text.whatWeDoTitle}</h2>
      <p>{text.whatWeDoText}</p>
    </section>
  );
}

export default WhatWeDo;
