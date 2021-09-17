import React from 'react';
import { Header } from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import textJSON from '../../texts.json';
import './ContactPage.scss';

function ContactPage() {
  return (
    <>
      <Header />
      <h1 className="contacts_h1">Kontakty</h1>
      <div className="contacts_both">
        <div className="contacts_one">
          <h2>{textJSON.contacts.bara.name}</h2>
          <span>
            <strong>IČ:</strong> {textJSON.contacts.bara.ic}
          </span>
          <span>
            <strong>Telefonní číslo:</strong> {textJSON.contacts.bara.phone}
          </span>
          <span>
            <strong>Email:</strong> {textJSON.contacts.bara.email}
          </span>
          <span>
            <strong>Adresa:</strong> {textJSON.contacts.bara.adresa}
          </span>
          <span>
            <a
              href={textJSON.contacts.bara.web}
              target="_blank"
              rel="noreferrer"
            >
              Osobní web
            </a>
          </span>
        </div>
        <div className="contacts_one">
          <h2>{textJSON.contacts.kaja.name}</h2>
          <span>
            <strong>IČ:</strong> {textJSON.contacts.kaja.ic}
          </span>
          <span>
            <strong>Telefonní číslo: </strong>
            {textJSON.contacts.kaja.phone}
          </span>
          <span>
            <strong>Email:</strong> {textJSON.contacts.kaja.email}
          </span>
          <span>
            <strong>Adresa:</strong> {textJSON.contacts.kaja.adresa}
          </span>
          <span>
            <a
              href={textJSON.contacts.kaja.web}
              target="_blank"
              rel="noreferrer"
            >
              Osobní web
            </a>
          </span>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default ContactPage;
