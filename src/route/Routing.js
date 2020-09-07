import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import Login from '../pages/Login';
import styled from 'styled-components';
import ErrorManager from '../pages/error/ErrorManager';

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
      <Route path={Routes.LOGIN}>
        <Login />
      </Route>
    </BrowserRouter>
    <ErrorManager />
  </Page>
);

export default Routing;
