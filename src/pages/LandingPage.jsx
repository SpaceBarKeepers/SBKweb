import React from 'react';
import { Main } from '../components/Main.jsx';
import { References } from '../components/References.jsx';
import { Contacts } from '../components/Contacts.jsx';
import './landingPage.scss';

export const LandingPage = () => {
  return (
    <div className="landingPage_div">
      <Main />
      <References />
      <Contacts />
    </div>
  );
};
