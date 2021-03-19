import { BrowserRouter, Redirect } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Routes from './Routes';
import AuthenticationRouter from '../pages/authentication/AuthenticationRouter';
import FantaleagueRouter from '../pages/fantaleague/FantaleagueRouter';
import HomeRouter from '../pages/home/HomeRouter';
import { useSession } from '../store/common/selectors/sessionSelector';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: relative;
`;

const Routing = () => {
  const session = useSession();

  return (
    <Page>
      <BrowserRouter>
        {!session && (
          <Redirect to={Routes.AUTHENTICATION.LOGIN} />
        )}
        {/* <Route exact path={Routes.AUTHENTICATION.LOGOUT}> */}
        {/*  <Logout /> */}
        {/* </Route> */}
        {/* <Route exact path={Routes.AUTHENTICATION.LOGIN}> */}
        {/*  <Login /> */}
        {/* </Route> */}
        {/* <Route exact path={Routes.AUTHENTICATION.REGISTER}> */}
        {/*  <Register /> */}
        {/* </Route> */}
        <AuthenticationRouter />
        <FantaleagueRouter />
        <HomeRouter />
        {/* <Route path={Routes.FANTALEAGUE.HOME}> */}
        {/*  <RoutingFantaLeague /> */}
        {/* </Route> */}
        {/* <Route exact path={Routes.REAL_WORLD.HOME}> */}
        {/*  <div>Real World still in progress</div> */}
        {/* </Route> */}
      </BrowserRouter>
      {/* <ErrorManager /> */}
    </Page>
  );
};

export default Routing;
