import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        {' '}
        <Route path="/">
          <LandingPage />
        </Route>  
        <Route path="/onas">
          <AboutUs />
        </Route>
        <Route path="/codelame">
          <WhatWeDo />
        </Route>
        <Route path="/reference">
          <References />
        </Route>{' '}
      
      </Switch>
    </AnimatePresence>
  );
}

export default App;
