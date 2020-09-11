import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Color } from '../../assets/theme';
import { loginActionCreator } from '../../store/session/sessionActionCreator';
import { getFetchingLogin, getSession } from '../../store/session/sessionSelector';
import Routes from '../../route/Routes';

const FullPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme[Color.BACKGROUND]};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Border = styled.div`
  border-radius: 8px;
  border:${(p) => `2px solid ${p.theme[Color.NEUTRAL]}`};
  width: 320px;
  max-height: 460px;
  box-sizing: border-box;
  box-shadow: 2px 12px 24px rgba(51, 51, 51, 0.08);
`;

const Box = styled.div`
  padding: 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

const StyledInput = styled(Input)`
  height: 40px;
  padding: 8px;
  margin: 8px 0;
`;

const Title = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  color: ${p => p.theme[Color.PRIMARY_VARIANT]};
`;

const RegisterText = styled.div`
  padding-top: 32px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Link = styled.div`
  color: ${(p) => p.theme[Color.PRIMARY_VARIANT]};
  font-weight: bold;
  padding-left: 4px;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const session = useSelector(getSession);
  const isFetchingLogin = useSelector(getFetchingLogin);

  const history = useHistory();

  useEffect(() => {
    if (session) {
      history.push('/');
    }
  }, [session]);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginActionCreator(username, password));
  };

  return (
    <FullPage>
      <Border>
        <Box>
          <Title>Fantabigolo</Title>
          <StyledInput
            placeholder="Nome utente"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledInput
            placeholder="Password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            loading={isFetchingLogin}
            style={{ marginTop: 16 }}
          >
            <span style={{ padding: 8 }}>Login</span>
          </Button>
          <RegisterText>
            Non sei ancora utente?
            <Link onClick={() => history.push(Routes.REGISTER)}>Registrati</Link>
          </RegisterText>
        </Box>
      </Border>
    </FullPage>
  );
};

export default Login;