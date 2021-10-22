import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/ContactPage/ContactPage';
import InitialDesktop from './pages/InitialDesktop/InitialDesktop';
import { BrowserRouter } from 'react-router-dom';
import { Contacts } from './components/Contacts/Contacts';
import { CookiesPolicy } from './pages/CookiesPolicy/CookiesPolicy';

function App() {
  const [wideScreen, setWideScreen] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
        setIsSafari(true);
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

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
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route path="/onas">
            <AboutUs />
          </Route>
          <Route path="/codelame">
            <WhatWeDo />
          </Route>
          <Route path="/reference">
            <References />
          </Route>
          <Route path="/kontakty/info">
            <Contacts />
          </Route>
          <Route path="/kontakty">
            <ContactPage />
          </Route>
          <Route path="/home">
            <InitialDesktop />
          </Route>
          <Route path="/cookies-policy">
            <CookiesPolicy />
          </Route>
          <Route path="/">
            {wideScreen && !isSafari ? <InitialDesktop /> : <LandingPage />}
          </Route>
        </Switch>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
