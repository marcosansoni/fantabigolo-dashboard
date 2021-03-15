import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BoxShadow from '../../../assets/BoxShadow';
import Color from '../../../assets/Color';
import Font from '../../../assets/Font';
import Routes from '../../../route/Routes';

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  box-shadow: ${BoxShadow.DARK};
  border-radius: 8px;
  padding: 24px;
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
  
  :hover{
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
  const handleSubmit = () => {
    console.log('Sumbit');
  };

  const { t } = useTranslation();

  const validationSchemaFormik = useMemo(() => validationSchema(t), []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaFormik}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Page>
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
            <Button variant="contained" color="primary" fullWidth onClick={formik.handleSubmit}>
              {t('register.primary')}
            </Button>
            <Link style={{textDecoration: 'unset'}} to={Routes.AUTHENTICATION.LOGIN}>
              <Description>{t('register.alreadyUser')}</Description>
            </Link>
          </Container>
        </Page>
      )}
    </Formik>
  );
};

export default Register;
