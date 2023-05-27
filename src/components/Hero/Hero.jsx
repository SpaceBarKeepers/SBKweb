import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button/Button';
import './hero.scss';

function Hero() {
  const { text } = useLanguage();

  return (
    <section className="hero">
      <h1 className="hero__title">
        <span>Spacebarkeepers </span>
        {text.hero.title}
      </h1>
      <div className="hero__btnWrapper">
        <Button btnText={text.hero.primaryBtnText} />
        <Button button="secondary" btnText={text.hero.secondaryBtnText} />
      </div>
    </section>
  );
}

export default Hero;
