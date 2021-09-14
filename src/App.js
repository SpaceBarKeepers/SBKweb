import React, {useEffect, useState} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';
import { Contacts } from './components/Contacts/Contacts';
import ContactPage from './pages/ContactPage/ContactPage';
import InitialDesktop from './pages/InitialDesktop/InitialDesktop';

function App() {
  const [wideScreen, setWideScreen] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if (window.innerWidth >= 1100) {
      setWideScreen(true);
    }
    window.addEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth >= 1100) {
      setWideScreen(true);
    } else {
      setWideScreen(false);
    }
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        {' '}
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
        </Route>{' '}
        <Route path="/home">
          <InitialDesktop />
        </Route>
        <Route path="/">
          {wideScreen ? <InitialDesktop /> : <LandingPage/>}
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
