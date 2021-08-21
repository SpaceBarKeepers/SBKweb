import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {' '}
        <Route path="/onas/informace">
          <About />
        </Route>
        <Route path="/onas">
          <AboutUs />
        </Route>
        <Route path="/codelame">
          <WhatWeDo />
        </Route>
        <Route path="/reference">
          <References />
        </Route>
        <Route path="/kontakty/detaily">
          <ContactPage />
        </Route>
        <Route path="/kontakty">
          <Contacts />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
