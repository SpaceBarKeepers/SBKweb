import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './contact.scss';

function Contact() {
  const { text } = useLanguage();
  return (
    <section className="contact">
      <h2>{text.contact}</h2>
      <div className="contact__wrapper">
        <a href="mailto:info@spacebarkeepers.com">{text.email}</a>
        <div>{text.phone}</div>
      </div>
    </section>
  );
}

export default Contact;
