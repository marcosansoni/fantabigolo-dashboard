import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import Routes from '../../route/Routes';
import Login from './login/Login';
import Register from './register/Register';

const AuthenticationRouter = () => (
  <Switch>
    <Route path={Routes.AUTHENTICATION.LOGIN} exact>
      <Login />
    </Route>
    <Route path={Routes.AUTHENTICATION.REGISTER} exact>
      <Register />
    </Route>
  </Switch>
);

export default AuthenticationRouter;
