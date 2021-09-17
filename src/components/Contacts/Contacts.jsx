import React from 'react';
import { Header } from '../../components/Header/Header.jsx';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import './contacts.scss';

export const Contacts = () => {
  return (
    <>
      <motion.section
        className="contacts_section"
        initial={{ y: '100vh' }}
        exit={{ y: '100vh' }}
        animate={{
          y: 0,
          transition: { duration: 0.5, type: 'tween' },
        }}
      >
        <Header />
        <div className="graphics_div"> </div>

        <motion.div className="contact_details">
          <div>
            <a href="mailto:info@spacebarkeepers.com" className="contact_email">
              info@spacebarkeepers.com
            </a>
            <span className="contact_phone">
              <a href="tel:601563231">+420 601 563 231</a>
            </span>
          </div>
          <Link className="moreInfo" to="/kontakty/detaily">
            Více informací{' '}
          </Link>
        </motion.div>
      </motion.section>
      <Navbar />
    </>
  );
};
