import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { Slide, Snackbar, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoadingButton from '@material-ui/lab/LoadingButton';
import BoxShadow from '../../../assets/BoxShadow';
import Color from '../../../assets/Color';
import Font from '../../../assets/Font';
import Routes from '../../../route/Routes';
import MediaQuerySelector from '../../../constants/responsive/MediaQuerySelector';
import postLoginActionCreator, { POST_LOGIN } from '../../../store/state/authentication/login/actionCreator/postLoginActionCreator';
import { useLoginError } from '../../../store/state/authentication/login/selectors/loginErrorSelector';
import { useFetchType } from '../../../store/state/common/selectors/fetchSelector';
import postLoginErrorActionCreator from '../../../store/state/authentication/login/actionCreator/postLoginErrorActionCreator';
import { useSession } from '../../../store/state/common/selectors/sessionSelector';

const Container = styled.div`
  width: 400px;
  box-shadow: ${BoxShadow.DARK};
  border-radius: 8px;
  padding: 24px;

  ${MediaQuerySelector.MEDIUM} {
    padding: 16px;
  }

  ${MediaQuerySelector.SMALL} {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
    padding: 24px;
  }
`;

const Page = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${(p) => p.theme[Color.PRIMARY_DARK]};
  font-size: 32px;
  margin-bottom: 24px;
  font-family: ${Font.SEMIBOLD};
`;

const ContainerInput = styled.div`
  height: 92px
`;

const Description = styled.div`
  margin-top: 8px;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 14px;
  color: ${(p) => p.theme[Color.SUBTITLE]};
  cursor: pointer;
  text-decoration: unset;

  :hover {
    color: ${(p) => p.theme[Color.TEXT_LIGHT]};
  }
`;

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = (t) => Yup.object({
  username: Yup.string(t('login.errors.username.default')).required(t('login.errors.username.required')),
  password: Yup.string(t('login.errors.password.default')).required(t('login.errors.password.required')),
});

const Login = () => {
  const dispatch = useDispatch();

  const loginError = useLoginError();
  const fetching = useFetchType(POST_LOGIN);
  const session = useSession();
  const history = useHistory();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const { t } = useTranslation();

  const validationSchemaFormik = useMemo(() => validationSchema(t), []);

  useEffect(() => {
    if (loginError?.length) {
      setSnackbarOpen(true);
      setSnackbarMessage(loginError[0]?.message);
    }
  }, [loginError]);

  // Clean errors associated at login when unmount
  useEffect(() => () => {
    if (loginError.length) dispatch(postLoginErrorActionCreator([]));
  }, []);

  // Redirect after successful login
  useEffect(() => {
    if (session.isValid) history.push(Routes.HOME);
  }, [session]);

  const handleSubmit = (formik) => {
    const { username, password } = formik;
    dispatch(postLoginActionCreator(username, password));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    dispatch(postLoginErrorActionCreator([]));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaFormik}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Page>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={snackbarOpen}
            onClose={() => handleSnackbarClose()}
            TransitionComponent={(p) => (<Slide {...p} direction="up" />)}
            message={snackbarMessage}
            autoHideDuration={3000}
          />
          <Container>
            <Title>{t('common.brand')}</Title>
            <ContainerInput>
              <TextField
                disabled={fetching}
                fullWidth
                label={t('login.placeholder.username')}
                name="username"
                variant="outlined"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched('username')}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </ContainerInput>
            <ContainerInput>
              <TextField
                disabled={fetching}
                fullWidth
                type="password"
                label={t('login.placeholder.password')}
                name="password"
                variant="outlined"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched('password')}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </ContainerInput>
            <LoadingButton
              pending={fetching}
              variant="contained"
              color="primary"
              fullWidth
              onClick={formik.handleSubmit}
            >
              {t('login.primary')}
            </LoadingButton>
            <Link style={{ textDecoration: 'unset' }} to={Routes.AUTHENTICATION.REGISTER}>
              <Description>{t('login.notYetUser')}</Description>
            </Link>
          </Container>
        </Page>
      )}
    </Formik>
  );
};

export default Login;
