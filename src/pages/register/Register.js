import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Routes from '../../route/Routes';
import useActionCreator from '../../store/utils/useActionCreator';
import SessionActionType from '../../store/session/SessionActionType';
import sessionSelector from '../../store/session/selectors/sessionSelector';
import sessionFetchingSelector from '../../store/session/selectors/sessionFetchingSelector';
import Color from '../../assets/Color';

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
  border:${(p) => `2px solid ${p.theme[Color.SUBTITLE]}`};
  width: 520px;
  max-height: 550px;
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
  padding-bottom: 32px;
  color: ${(p) => p.theme[Color.PRIMARY_DARK]};
`;

const RegisterText = styled.div`
  padding-top: 32px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Link = styled.div`
  color: ${(p) => p.theme[Color.PRIMARY_DARK]};
  font-weight: bold;
  padding-left: 4px;
  cursor: pointer;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 8px;
`;

const Register = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  const { session } = useSelector(sessionSelector);
  const isFetchingSession = useSelector(sessionFetchingSelector);

  const history = useHistory();

  useEffect(() => {
    if (session) {
      history.push('/');
    }
  }, [session, history]);

  const register = useActionCreator(SessionActionType.POST_REGISTER_REQUEST);

  const handleRegister = () => {
    register({
      username, password, email, firstName, lastName,
    });
  };

  const { t } = useTranslation();

  return (
    <FullPage>
      <Border>
        <Box>
          <Title>{t('common.brand')}</Title>
          <Description>Inserisci i campi sottostanti per completare la registrazione</Description>
          <StyledInput
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
          <StyledInput
            placeholder="Nome"
            value={firstName}
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <StyledInput
            placeholder="Cognome"
            value={lastName}
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Button
            onClick={handleRegister}
            loading={isFetchingSession}
            style={{ marginTop: 16 }}
          >
            <span style={{ padding: 8 }}>Registrati</span>
          </Button>
          <RegisterText>
            Sei già registrato?
            <Link onClick={() => history.push(Routes.LOGIN)}>Vai al login</Link>
          </RegisterText>
        </Box>
      </Border>
    </FullPage>
  );
};

export default Register;
