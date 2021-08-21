import React from 'react';
import window from '../../images/graphics/Window.png';
import { motion } from 'framer-motion';

import './about.scss';

const aboutVariants = {
  hidden: { z: -1 },
  visible: { z: 0, transition: { ease: 'easeIn', duration: 4 } },
};

export const About = () => {
  return (
    <motion.section
      className="about_page"
      style={{ backgroundImage: `url(${window})` }}
      variants={aboutVariants}
      initial="hidden"
      animate="visible"
    >
      O nás - info
    </motion.section>
  );
};
