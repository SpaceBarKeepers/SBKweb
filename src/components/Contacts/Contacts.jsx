import React from 'react';
import { motion } from 'framer-motion';
import './contacts.scss';
import textJSON from '../../texts.json';

export const Contacts = () => {
  return (
    <>
        <div className="contacts_both">
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
    </>
  );
};
