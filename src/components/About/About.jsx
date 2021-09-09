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
      <div className="image-container-single">
        <div className="thumbnail-single">
          <div className="frame-single">
            <img src={window} alt="window" />
            <div className="aboutUs_content">
              <h2>O nás</h2>
              <p>{textJSON.aboutUs.mainText}</p>
              <h3>Bára</h3>
              <p>{textJSON.aboutUs.bara}</p>
              <h3>Kája</h3>
              <p>{textJSON.aboutUs.karel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
