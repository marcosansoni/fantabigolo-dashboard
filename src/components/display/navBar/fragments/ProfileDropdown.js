import React from 'react';
import { MenuItem } from '@material-ui/core';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
// import Skeleton from '@material-ui/lab/Skeleton';
import { Skeleton } from '@material-ui/lab';
import { useUser } from '../../../../store/state/navbar/user/selectors/userSelector';
import Color from '../../../../assets/Color';
import { useFetchType } from '../../../../store/state/common/selectors/fetchSelector';
import { GET_USER } from '../../../../store/state/navbar/user/actionCreator/getUserActionCreator';

const ContainerUserMenu = styled.div`
  //width: 320px;
`;

const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 8px 24px;
  border-bottom: ${(p) => `2px solid ${p.theme[Color.SUBTITLE]}`};
`;

const Name = styled.div`
  font-size: 16px;
  padding-bottom: 4px;
`;

const Email = styled.div`
  font-size: 12px;
`;

const ProfileDropdown = (props) => {
  const { onLogout, style, className } = props;
  const { t } = useTranslation();
  const { firstName, lastName, email } = useUser();
  const fetching = useFetchType(GET_USER);

  return (
    <ContainerUserMenu style={style} className={className}>
      <Profile>
        <Name>
          {(fetching) ? <Skeleton variant="text" style={{ width: 120 }} /> : `${firstName} ${lastName}` }
        </Name>
        <Email>
          {fetching ? <Skeleton variant="text" style={{ width: 180 }} /> : email}
        </Email>
      </Profile>
      <MenuItem
        style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 24 }}
        onClick={onLogout}
      >
        {t('common.logout')}
      </MenuItem>
    </ContainerUserMenu>
  );
};

ProfileDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

ProfileDropdown.defaultProps = {
  style: undefined,
  className: undefined,
};

export default ProfileDropdown;
