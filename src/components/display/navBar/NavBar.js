import React, { useRef, useState } from 'react';
import { AccountCircle } from '@material-ui/icons';
import { AppBar, IconButton, MenuItem, Popover, Toolbar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Font from '../../../assets/Font';

const Content = styled.div`
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-family: ${Font.SEMIBOLD};
  font-size: 24px;
`;

const ContainerUserMenu = styled.div`
  //width: 200px;
`;

const NavBar = (props) => {
  const { children, style, className } = props;
  const { t } = useTranslation();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef();

  return (
    <AppBar position="static" style={style} className={className}>
      <Toolbar style={{ justifyContent: 'space-between', flex: '1 100%' }}>
        <Title>{t('common.brand')}</Title>
        <Content>
          {children}
        </Content>
        <Right>
          <IconButton
            ref={menuRef}
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={() => setIsUserMenuOpen(true)}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Right>
        <Popover
          open={isUserMenuOpen}
          anchorEl={menuRef.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          onClose={() => setIsUserMenuOpen(false)}
          disableRestoreFocus
        >
          <ContainerUserMenu>
            <MenuItem style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              {t('common.logout')}
            </MenuItem>
          </ContainerUserMenu>
        </Popover>
      </Toolbar>
    </AppBar>
  );
};

NavBar.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

NavBar.defaultProps = {
  children: undefined,
  style: undefined,
  className: undefined,
};

export default NavBar;
