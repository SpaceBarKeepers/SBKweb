import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './contacts.scss';

export const Contacts = () => {
  return (
    <>
      <section className="contacts_section">
        <Header />
        <Navbar />
        <div className="graphics_div"> </div>
        <div className="contact_details">
          <div>
            <a href="mailto:info@spacebarkeepers.com" className="contact_email">
              info@spacebarkeepers.com
            </a>
            <span className="contact_phone">+420 601 563 231</span>
          </div>
          <Link className="moreInfo" to="/kontakty/detaily">Více informací </Link>
        </div>
      </section>
    </>
  );
};
