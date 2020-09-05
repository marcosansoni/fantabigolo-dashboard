import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import Login from '../pages/Login';

const Routing = () => (
  <BrowserRouter>
    <Route path={Routes.LOGIN}>
      <Login />
    </Route>
  </BrowserRouter>
);

export default Routing;
