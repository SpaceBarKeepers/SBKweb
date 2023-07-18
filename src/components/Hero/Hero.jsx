import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button/Button';
import './hero.scss';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const { text } = useLanguage();
  let navigate = useNavigate();

  return (
    <section className="hero">
      <h1 className="hero__title">
        <span>Spacebarkeepers </span>
        {text.hero.title}
      </h1>
      <div className="hero__btnWrapper">
        <Button
          btnText={text.hero.primaryBtnText}
          onClick={() => navigate('#contact')}
        />
        <Button
          button="secondary"
          btnText={text.hero.secondaryBtnText}
          onClick={() => navigate('#whatWeDo')}
        />
      </div>
    </section>
  );
}

export default Hero;
