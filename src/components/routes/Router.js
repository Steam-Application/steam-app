import React from 'react';
import Route from './Route.js';
import { BrowserRouter, Switch } from 'react-router-dom';

import {
  Home,
  Profile
} from '../../containers';

import {
  ROUTE_HOME,
  ROUTE_PROFILE
} from '../../config/routes.js';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={ROUTE_HOME}>
          <Home />
        </Route>
        <Route exact path={`${ROUTE_PROFILE}/:steamId`}>
          <Profile />
        </Route>
        <Route exact path={ROUTE_HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTE_HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;