import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import './ContactPage.scss';
import { Contacts } from '../../components/Contacts/Contacts.jsx';
import ScrollForMore from './scrollForMore.js';

function ContactPage() {
  return (
    <>
      <Navbar />

      <motion.section
        className="contacts_section"
        initial={{ y: '100vh' }}
        exit={{ y: '100vh' }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: 'tween' },
        }}
      >
        <Header logoType="homepage" />
        <div className="graphics_div"> </div>

        <motion.div className="contact_details">
          <h1>Kontakty</h1>
          <a href="mailto:info@spacebarkeepers.com" className="contact_email">
            info@spacebarkeepers.com
          </a>
          <span className="contact_phone">
            <a href="tel:601563231">+420 601 563 231</a>
          </span>
          <ScrollForMore />
          <Contacts />
        </motion.div>
      </motion.section>
    </>
  );
}

export default ContactPage;
