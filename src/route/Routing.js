import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Routes from './Routes';
import Login from '../pages/login/Login';
import ErrorManager from '../pages/error/ErrorManager';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import { getSession } from '../store/session/sessionSelector';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: relative;
`;

const Routing = () => {
  const session = useSelector(getSession);

  return (
    <Page>
      <BrowserRouter>
        {!session && (
          <Redirect to={Routes.LOGIN} />
        )}
        <Route exact path={Routes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={Routes.REGISTER}>
          <Register />
        </Route>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
      </BrowserRouter>
      <ErrorManager />
    </Page>
  );
};

export default Routing;
