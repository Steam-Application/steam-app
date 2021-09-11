import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route.js';
import Home from '../../containers/Home.js';
import SearchUser from '../../containers/SearchUser.js';
import {
  ROUTE_HOME,
  ROUTE_SEARCH_USER
} from '../config/routes.js';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_HOME}>
        <Home />
      </Route>
      <Route exact path={ROUTE_SEARCH_USER}>
        <SearchUser />
      </Route>
    </Switch>
  );
}

export default Routes;