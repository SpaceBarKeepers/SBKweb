import React from 'react';
import window from '../../images/graphics/Window.png';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';

import textJSON from '../../texts.json';
import './about.scss';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const About = ({ imageDetails }) => {
  return (
    <section className="about_page">
      <Navbar />
      <motion.div className="image-container-single">
        <motion.div
          initial={{
            y: 0,
            width: imageDetails.width,
            height: imageDetails.height,
          }}
          animate={{
            y: '-40%',
            width: '110%',
            height: window.innerWidth > 1440 ? 1100 : 400,
            transition: { delay: 0.2, ...transition },
          }}
          className="thumbnail-single"
        >
          <motion.div
            className="frame-single"
            whileHover="hover"
            transition={transition}
          >
            <motion.img
              src={window}
              alt="window"
              initial={{ y: '10%', scale: 1.0 }}
              animate={{
                transition: { delay: 0.2, ...transition },
                y: 0,
              }}
            />
            <motion.div
              initial={{ z: 0, y: 0, opacity: 0 }}
              animate={{ z: 0, y: '40%', opacity: 1 }}
              transition={transition}
              className="aboutUs_content"
            >
              <h2>O nás</h2>
              <p>{textJSON.aboutUs.mainText}</p>
              <h3>Bára</h3>
              <p>{textJSON.aboutUs.bara}</p>
              <h3>Kája</h3>
              <p>{textJSON.aboutUs.karel}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>{' '}
    </section>
  );
};
