import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route.js';
import Home from '../../containers/Home.js';
import {
  ROUTE_HOME,
  ROUTE_SEARCH_USER
} from '../../config/routes.js';

const Routes = () => {
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

export default Routes;