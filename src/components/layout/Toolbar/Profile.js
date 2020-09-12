import UserOutlined from '@ant-design/icons/lib/icons/UserOutlined';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from '../../../assets/theme';
import useClickOut from '../../../hooks/useClickOut';
import { getUserInfo } from '../../../store/user/userSelector';
import { logoutActionCreator } from '../../../store/session/sessionActionCreator';

const ContainerPhoto = styled.div`
  border-radius: 50%;
  border: ${(p) => `1px solid ${p.theme[Color.BORDER]}`};
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  min-width: 190px;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  border-radius: 4px;
  border: ${(p) => `1px solid${p.theme[Color.BORDER]}`};
  box-shadow: 2px 12px 24px rgba(51, 51, 51, 0.08);
  z-index: 10;
  
  :empty{
    display: none;
  }
`;

const Name = styled.div`
  font-size: 12px;
  padding: 8px 16px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 625;
  padding: 8px 16px;
  cursor: ${(p) => !p.disabled && 'pointer'};
  
  :hover{
    background-color: ${(p) => !p.disabled && p.theme[Color.SECONDARY]};
  }
`;

const Separator = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${(p) => p.theme[Color.NEUTRAL]};
  margin: 8px 0;
`;

const Profile = () => {
  const {
    firstName,
    lastName,
    email,
  } = useSelector(getUserInfo);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutActionCreator());
  };

  const [isSelected, setIsSelected] = useState(false);

  const dropdown = () => (
    <Dropdown>
      <Title disabled>Informazioni utente</Title>
      <Name>
        {`${firstName} ${lastName}`}
        {' '}
      </Name>
      <Name>{email}</Name>
      <Separator />
      <Title onClick={handleLogout}>Logout</Title>
    </Dropdown>
  );

  const handleClickPhoto = () => {
    setIsSelected(!isSelected);
  };

  const ref = useClickOut(() => isSelected && setIsSelected(false));

  return (
    <VerticalFlex>
      <ContainerPhoto onClick={handleClickPhoto}>
        <UserOutlined />
      </ContainerPhoto>
      <div ref={ref}>
        {isSelected && dropdown()}
      </div>
    </VerticalFlex>

  );
};

export default Profile;
