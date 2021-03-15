import { Route } from 'react-router-dom';
import React from 'react';
import Routes from '../../route/Routes';
import NewFantaLeague from './new/NewFantaLeague';

const RoutingFantaLeague = () => (
  <>
    <Route exact path={Routes.FANTALEAGUE.NEW}>
      <NewFantaLeague />
    </Route>
    <Route exact path={Routes.FANTALEAGUE.HOME_LEAGUE}>
      <div>Dettaglio lega</div>
    </Route>
  </>
);

export default RoutingFantaLeague;
