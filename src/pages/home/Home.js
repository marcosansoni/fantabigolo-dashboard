import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getSession, getUsername } from '../../store/session/sessionSelector';
import { logoutActionCreator } from '../../store/session/sessionActionCreator';
import Routes from '../../route/Routes';

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  const session = useSelector(getSession);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  return (
    <Center>
      {session && (
        <>
          <div style={{padding: 8}}>
            Successful login as
            {' '}
            {username}
          </div>
          <Button onClick={handleLogout}>
            LOGOUT
          </Button>
        </>
      )}
      {!session && 'You will be redirected to login'}
      {!session && (
        <Redirect to={Routes.LOGIN} />
      )}
    </Center>
  );
};

export default Home;
