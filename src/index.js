import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import './index.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';


ReactDOM.render(
  <BrowserRouter>
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/codelame">
          <WhatWeDo />
        </Route>
        <Route path="/reference">
          <References />
        </Route>
        <Route path="/onas">
          <AboutUs />
        </Route>
      </Switch>
    </AnimatePresence>
  </BrowserRouter>,
  document.getElementById('root'),
);
