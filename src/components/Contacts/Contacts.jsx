import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../Navbar/Navbar';
import './contacts.scss';

export const Contacts = ({ setContactVisible }) => {
  const { push } = useHistory();

  return (
    <>
      <section className="contacts_section">
        <Navbar setContactVisible={setContactVisible} />
        <div className="contacts_div"> </div>
        <div className="contact_details">
          <div>
            <div className="contact_email">info@spacebarkeepers.com</div>
            <div className="contact_phone">+420 601 563 231</div>
          </div>
          <div onClick={() => push('/kontakty/detaily')}>Více informací </div>
        </div>
      </section>
    </>
  );
};
