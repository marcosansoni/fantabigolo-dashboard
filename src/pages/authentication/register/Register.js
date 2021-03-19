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
import { useFetchType } from '../../../store/common/selectors/fetchSelector';
import { useSession } from '../../../store/common/selectors/sessionSelector';
import { useRegisterError } from '../../../store/authentication/register/selectors/registerErrorSelector';
import postRegisterActionCreator, { POST_REGISTER } from '../../../store/authentication/register/actionCreator/postRegisterActionCreator';
import postRegisterErrorActionCreator
  from '../../../store/authentication/register/actionCreator/postRegisterErrorActionCreator';

const Container = styled.div`
  width: 90%;
  max-width: 500px;
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

  :hover {
    color: ${(p) => p.theme[Color.TEXT_LIGHT]};
  }
`;

const initialValues = {
  email: '',
  username: '',
  password: '',
  firstName: '',
  lastName: '',
};

const validationSchema = (t) => Yup.object({
  username: Yup.string(t('register.errors.username.default')).required(t('register.errors.username.required')),
  password: Yup.string(t('register.errors.password.default')).required(t('register.errors.password.required')),
  email: Yup.string(t('register.errors.email.default')).email(t('register.errors.email.invalid')).required(t('register.errors.email.required')),
  firstName: Yup.string(t('register.errors.firstName.default')).required(t('register.errors.firstName.required')),
  lastName: Yup.string(t('register.errors.lastName.default')).required(t('register.errors.lastName.required')),
});

const Register = () => {
  const dispatch = useDispatch();

  const registerError = useRegisterError();
  const fetching = useFetchType(POST_REGISTER);
  const session = useSession();
  const history = useHistory();
  const { t } = useTranslation();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(false);

  const validationSchemaFormik = useMemo(() => validationSchema(t), []);

  useEffect(() => {
    if (registerError?.length) {
      setSnackbarOpen(true);
      setSnackbarMessage(registerError[0]?.message);
    }
  }, [registerError]);

  // Clean errors associated at register when unmount
  useEffect(() => () => {
    if (registerError.length) dispatch(postRegisterErrorActionCreator([]));
  }, []);

  // Redirect after successful registration
  useEffect(() => {
    if (session.isValid) history.push(Routes.HOME);
  }, [session]);

  const handleSubmit = (formik) => {
    const { username, password, email, firstName, lastName } = formik;
    dispatch(postRegisterActionCreator({
      username, password, firstName, lastName, email,
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    dispatch(postRegisterErrorActionCreator([]));
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
                fullWidth
                label={t('register.placeholder.firstName')}
                name="firstName"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched('firstName')}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </ContainerInput>
            <ContainerInput>
              <TextField
                fullWidth
                label={t('register.placeholder.lastName')}
                name="lastName"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched('lastName')}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </ContainerInput>
            <ContainerInput>
              <TextField
                fullWidth
                label={t('register.placeholder.email')}
                name="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched('email')}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </ContainerInput>
            <ContainerInput>
              <TextField
                fullWidth
                label={t('register.placeholder.username')}
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
              {t('register.primary')}
            </LoadingButton>
            <Link style={{ textDecoration: 'unset' }} to={Routes.AUTHENTICATION.LOGIN}>
              <Description>{t('register.alreadyUser')}</Description>
            </Link>
          </Container>
        </Page>
      )}
    </Formik>
  );
};

export default Register;
