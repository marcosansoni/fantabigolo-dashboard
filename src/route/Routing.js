import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import Login from '../pages/login/Login';
import styled from 'styled-components';
import ErrorManager from '../pages/error/ErrorManager';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: relative;
`;

const Routing = () => (
  <Page>
    <BrowserRouter>
      <Route exact path={Routes.LOGIN}>
        <Login />
      </Route>
      <Route exact path={Routes.REGISTER}>
        <Register />
      </Route>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
      {/*<Redirect to={Routes.HOME} />*/}
    </BrowserRouter>
    <ErrorManager />
  </Page>
);

export default Routing;
