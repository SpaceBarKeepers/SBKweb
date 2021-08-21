import React, { useState } from 'react';
import { Home } from '../../components/Home/Home.jsx';
import { Header } from '../../components/Header/Header.jsx';
import { motion } from 'framer-motion';
import { Contacts } from '../../components/Contacts/Contacts';
import './landingPage.scss';

/* const homeVariants = {
  hidden: { x: '100vw' },
  visible: { x: 0, transition: { duration: 0.5, type: 'tween' } },
}; */

export const LandingPage = () => {
  const [contactVisible, setContactVisible] = useState(false);

  return (
    <motion.div
      className="landingPage_div"
      /*    variants={homeVariants}
      inital="hidden"
      animate="visible"
      exit="hidden" */
    >
      {' '}
      <Header />
      {contactVisible === false ? (
        <Home />
      ) : (
        <Contacts setContactVisible={setContactVisible(true)} />
      )}
    </motion.div>
  );
};
