import React from 'react';
import blueChairs from '../../images/graphics/blueChairs.svg';

import { Header } from '../../components/Header/Header';
import './whatWeDo.scss';

function WhatWeDo() {
  return (
    <section className="whatWeDo_section">
      <Header />
      <h1>Co nabízíme</h1>
      <div className="wwd_bar"></div>
      <div
        className="wwd_chairs"
        style={{ backgroundImage: `url(${blueChairs})` }}
      ></div>
      <div className="whatWeDo_purple"></div>
      <div className="whatWeDo_pink"></div>
    </section>
  );
}

export default WhatWeDo;
