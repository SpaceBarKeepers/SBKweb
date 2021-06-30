import React from 'react';
import { Home } from '../../components/Home/Home.jsx';
import { Header } from '../../components/Header/Header.jsx';
import './landingPage.scss';

export const LandingPage = () => {
  return (
    <div className="landingPage_div">
      <Header />
      <Home />
    </div>
  );
};
