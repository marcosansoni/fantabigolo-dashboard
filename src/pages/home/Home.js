import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUsername } from '../../store/session/sessionSelector';
import { logoutActionCreator } from '../../store/session/sessionActionCreator';
import ContainerPage from '../../components/layout/ContainerPage';
import { userInfoActionCreator } from '../../store/user/userActionCreator';
import useTheme from '../../hooks/useTheme';
import { friendsListActionCreator } from '../../store/friends/friendsActionCreator';
import Section from '../../components/display/Section';
import H3 from '../../components/typography/heading/H3';
import P from '../../components/typography/paragraph/P';
import {Button} from 'antd';
import Routes from '../../route/Routes';

const ContainerEmpty = styled.div`
  width: 100%;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  const { theme } = useTheme();

  const history = useHistory();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  // const renderDropdown = (option) => {
  //   if (option === ToolbarOptions.FANTALEGHE) {
  //     return (<FantaDropdown />);
  //   }
  // };

  // const renderToolbar = () => (
  //   <Toolbar
  //     options={[ToolbarOptions.FANTALEGHE, ToolbarOptions.REAL_WORLD]}
  //     renderDropdown={renderDropdown}
  //   />
  // );

  useEffect(() => {
    dispatch(userInfoActionCreator(username));
    dispatch(friendsListActionCreator(username));
  }, [username, dispatch]);

  return (
    <ContainerPage>
      {/* <Center> */}
      {/*  <> */}
      {/*    <div style={{ padding: 8 }}> */}
      {/*      <H1>Succesfull login as</H1> */}
      {/*      {' '} */}
      {/*      <H3>{username}</H3> */}
      {/*    </div> */}
      {/*    <Button onClick={handleLogout}> */}
      {/*      LOGOUT */}
      {/*    </Button> */}
      {/*  </> */}
      {/*  <Tile shadow leftBorder bottomBorder> */}
      {/*    CCC */}
      {/*  </Tile> */}
      {/* </Center> */}
      {/* <GridContainer colGutters={48}> */}
      {/*  <GridRow> */}
      {/*    <GridCol size={6}> */}
      {/*      <Tile shadow style={{ backgroundColor: theme[Color.LIGHT_BACKGROUND], paddingTop: 24 }}> */}
      {/*        <H2>Highlight</H2> */}
      {/*        <GridRow style={{ paddingTop: 16 }}> */}
      {/*          <Tile shadow bottomBorder style={{ marginRight: 48, maxWidth: 277 }}><H3>AA</H3></Tile> */}
      {/*          <Tile shadow bottomBorder style={{ marginRight: 48, maxWidth: 277 }}>2</Tile> */}
      {/*          <Tile shadow bottomBorder style={{ maxWidth: 277 }}>3</Tile> */}
      {/*        </GridRow> */}
      {/*      </Tile> */}
      {/*    </GridCol> */}
      {/*  </GridRow> */}
      {/* </GridContainer> */}
      {/* /!* <GridRow> *!/ */}
      {/* /!*  <GridCol size={6}> *!/ */}
      <Section title={(<H3>Fantaleghe</H3>)}>
        <ContainerEmpty>
          <P>Nessuna fantalega al momento</P>
          <Button onClick={() => history.push(Routes.FANTALEAGUE.NEW)}>Creane una</Button>
        </ContainerEmpty>
      </Section>
    </ContainerPage>
  );
};

export default Home;
