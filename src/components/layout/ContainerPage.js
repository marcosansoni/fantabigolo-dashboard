import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Routes from '../../route/Routes';
import { userInfoActionCreator } from '../../store/user/userActionCreator';
import { friendsListActionCreator } from '../../store/friends/friendsActionCreator';
import { getUsername } from '../../store/session/sessionSelector';
import { getUserInfo } from '../../store/user/userSelector';
import { Color } from '../../assets/theme';
import useTheme from '../../hooks/useTheme';
import Grid from '../grid/Grid';

const { Header, Content } = Layout;
const { SubMenu } = Menu;

const ItemShow = styled(Menu.Item)`
  color: ${(p) => p.theme[Color.TEXT]};
  cursor: default;
  
  :hover{
    color: ${(p) => p.theme[Color.TEXT]};
  }
`;

export const ToolbarItem = {
  FANTALEAGUE: 'FANTALEAGUE',
  REAL_WORLD: 'REAL_WORLD',
  PROFILE: 'PROFILE',
  SETTINGS: 'SETTINGS',
  LOGOUT: 'LOGOUT',
};

const ContainerPage = (props) => {
  const {
    children,
    selectedItem,
  } = props;

  const username = useSelector(getUsername);
  const userInfo = useSelector(getUserInfo);
  const dispatch = useDispatch();

  const { theme } = useTheme();

  const history = useHistory();

  const handleClickMenuItem = ({ key }) => {
    switch (key) {
      case ToolbarItem.FANTALEAGUE:
        return history.push(Routes.FANTALEAGUE.HOME);
      case ToolbarItem.REAL_WORLD:
        return history.push(Routes.REAL_WORLD.HOME);
      case ToolbarItem.LOGOUT:
        return history.push(Routes.LOGOUT);
      case ToolbarItem.SETTINGS:
        return history.push(Routes.SETTINGS);
      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(userInfoActionCreator(username));
    dispatch(friendsListActionCreator(username));
  }, [username, dispatch]);

  const {
    firstName,
    lastName,
    email,
  } = userInfo;

  return (
    <Layout>
      <Header style={{
        position: 'fixed', zIndex: 1, width: '100%', padding: 0,
      }}
      >
        <Menu mode="horizontal" defaultSelectedKeys={[selectedItem]} onClick={handleClickMenuItem}>
          <Menu.Item key={ToolbarItem.FANTALEAGUE}>Fantaleghe</Menu.Item>
          <Menu.Item key={ToolbarItem.REAL_WORLD}>Serie A</Menu.Item>
          <SubMenu key={ToolbarItem.PROFILE} icon={<UserOutlined />} title="Profilo" style={{ position: 'absolute', right: 0 }}>
            <ItemShow key="infoFirstLastName">{`${firstName} ${lastName}`}</ItemShow>
            <ItemShow key="infoEmail">{email}</ItemShow>
            <Menu.Divider />
            <Menu.Item key={ToolbarItem.SETTINGS}>Impostazioni</Menu.Item>
            <Menu.Item key={ToolbarItem.LOGOUT}>Log out</Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Content style={{ marginTop: 64, backgroundColor: theme[Color.BACKGROUND] }}>
        <Grid style={{ padding: 24 }}>
          {children}
        </Grid>
      </Content>
    </Layout>
  );
};

ContainerPage.propTypes = {
  children: PropTypes.any,
  selectedItem: PropTypes.string,
};

ContainerPage.defaultProps = {
  children: undefined,
  selectedItem: undefined,
};

export default ContainerPage;
