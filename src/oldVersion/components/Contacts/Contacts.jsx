import React from 'react';
import './contacts.scss';
import textJSON from '../../../texts.json';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const Contacts = () => {
  return (
    <>
      <Navbar />
      <div className="contacts_both">
        <h2 className="contacts_bothTitle">Kontakty - bližší informace</h2>
        <div className="contacts_one">
          <h3>{textJSON.contacts.bara.name}</h3>
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
        </div>
        <div className="contacts_one">
          <h3>{textJSON.contacts.kaja.name}</h3>
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
        </div>
      </div>
      <Footer />
    </>
  );
};
