import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Button from '../Button/Button';
import './hero.scss';

function Hero() {
  const { text } = useLanguage();

  const handleButtonClick = (hash) => () => {
    document.getElementById(hash).scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="hero">
      <h1 className="hero__title">
        <span>Spacebarkeepers </span>
        {text.hero.title}
      </h1>
      <div className="hero__btnWrapper">
        <Button
          btnText={text.hero.primaryBtnText}
          onClick={handleButtonClick("contact")}
        />
        <Button
          button="secondary"
          btnText={text.hero.secondaryBtnText}
          onClick={handleButtonClick("whatWeDo")}
        />
      </div>
    </section>
  );
}

export default Hero;
