import { Button } from 'antd';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getUsername } from '../../store/session/sessionSelector';
import { logoutActionCreator } from '../../store/session/sessionActionCreator';
import ContainerPage from '../../components/layout/ContainerPage';
import Toolbar from '../../components/layout/Toolbar/Toolbar';
import FantaDropdown from '../../components/layout/Toolbar/dropdown/FantaDropdown';
import { userInfoActionCreator } from '../../store/user/userActionCreator';

const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ToolbarOptions = {
  FANTALEGHE: 'Fantaleghe',
  REAL_WORLD: 'Real World',
};

const Home = () => {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  const renderDropdown = (option) => {
    if (option === ToolbarOptions.FANTALEGHE) {
      return (<FantaDropdown />);
    }
  };

  const renderToolbar = () => (
    <Toolbar
      options={[ToolbarOptions.FANTALEGHE, ToolbarOptions.REAL_WORLD]}
      renderDropdown={renderDropdown}
    />
  );

  useEffect(() => {
    dispatch(userInfoActionCreator(username));
  }, [username, dispatch]);

  return (
    <ContainerPage toolbar={renderToolbar()}>
      <Center>
        <>
          <div style={{ padding: 8 }}>
            Successful login as
            {' '}
            {username}
          </div>
          <Button onClick={handleLogout}>
            LOGOUT
          </Button>
        </>
      </Center>
    </ContainerPage>
  );
};

export default Home;
