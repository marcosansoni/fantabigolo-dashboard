import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../../route/Routes';
import Home from './Home';

const HomeRouter = () => (
  <Switch>
    <Route path={Routes.HOME} exact>
      <Home />
    </Route>
  </Switch>
);

export default HomeRouter;
