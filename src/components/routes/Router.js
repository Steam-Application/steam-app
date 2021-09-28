import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route.js';
import Home from '../../containers/Home.js';

import {
  ROUTE_HOME
} from '../../config/routes.js';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTE_HOME}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;