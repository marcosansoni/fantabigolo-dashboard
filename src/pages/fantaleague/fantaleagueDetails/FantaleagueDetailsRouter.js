import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from '../../../route/Routes';
import FantaleagueDetailsSettings from './fantaleagueDetailsSettings/FantaleagueDetailsSettings';

const FantaleagueDetailsRouter = () => (
  <BrowserRouter>
    <Route path={Routes.FANTALEAGUE.SETTINGS.INDEX}>
      <FantaleagueDetailsSettings />
    </Route>
    <Route path={Routes.FANTALEAGUE.HOME_LEAGUE} exact>
      <div>Route details home path</div>
    </Route>
  </BrowserRouter>
);

export default FantaleagueDetailsRouter;
