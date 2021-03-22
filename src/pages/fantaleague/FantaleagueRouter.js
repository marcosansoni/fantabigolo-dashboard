import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from '../../route/Routes';
import FantaleagueList from './fantaleagueList/FantaleagueList';
import FantaleagueNew from './fantaleagueNew/FantaleagueNew';
import FantaleagueDetailsRouter from './fantaleagueDetails/FantaleagueDetailsRouter';

const FantaleagueRouter = () => (
  <Switch>
    <Route path={Routes.FANTALEAGUE.LIST} exact>
      <FantaleagueList />
    </Route>
    <Route path={Routes.FANTALEAGUE.NEW} exact>
      <FantaleagueNew />
    </Route>
    <Route path={Routes.FANTALEAGUE.HOME_LEAGUE}>
      <FantaleagueDetailsRouter />
    </Route>
  </Switch>
);

export default FantaleagueRouter;
