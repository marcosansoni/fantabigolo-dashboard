import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import Routes from '../../route/Routes';
import FantaleagueList from './fantaleagueList/FantaleagueList';

const FantaleagueRouter = () => (
  <Switch>
    <Route path={Routes.FANTALEAGUE.LIST} exact>
      <FantaleagueList />
    </Route>
  </Switch>
);

export default FantaleagueRouter;
