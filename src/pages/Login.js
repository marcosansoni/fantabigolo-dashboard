import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { Color } from '../assets/theme';
import { loginActionCreator } from '../store/session/sessionActionCreator';

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
  margin: 16px 0;
`;

const Title = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding-left: 8px;
  cursor: pointer;
`;

const Login = (props) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginActionCreator(username, password));
  };

  return (
    <FullPage>
      <Border>
        <Box>
          <Title>LOGIN</Title>
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
          >
            Login
          </Button>
          <RegisterText>
            Non sei ancora utente?
            <Link>Registrati</Link>
          </RegisterText>
        </Box>
      </Border>
    </FullPage>
  );
};

export default Login;
