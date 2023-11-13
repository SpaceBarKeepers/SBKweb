import React from 'react';
import WhatWeDo from './WhatWeDo';
import Services from './Services';
import Customers from './Customers';
import WhoWeAre from './WhoWeAre';
import './main.scss';

function Main() {
  return (
    <main className="main">
      <WhatWeDo />
      <Services />
      <Customers />
      <WhoWeAre />
    </main>
  );
}

export default Main;
