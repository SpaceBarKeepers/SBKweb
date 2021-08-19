import React from 'react';
import window from '../../images/graphics/Window.png';

import './about.scss';

export const About = () => {
  return (
    <section
      className="about_page"
      style={{ backgroundImage: `url(${window})` }}
    >
      O nás - info
    </section>
  );
};
