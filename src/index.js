import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import { LandingPage } from './pages/LandingPage/LandingPage';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import References from './pages/References/References';
import AboutUs from './pages/AboutUs/AboutUs';

ReactDOM.render(
  <BrowserRouter>
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
  </BrowserRouter>,
  document.getElementById('root'),
);
