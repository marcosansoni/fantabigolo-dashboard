import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import BoxShadow from '../../../assets/BoxShadow';
import Color from '../../../assets/Color';
import Font from '../../../assets/Font';

const Container = styled.div`
  width: 90%;
  max-width: 400px;
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
  username: '',
  password: '',
};

const validationSchema = (t) => Yup.object({
  username: Yup.string(t('login.errors.username.default')).required(t('login.errors.username.required')),
  password: Yup.string(t('login.errors.password.default')).required(t('login.errors.password.required')),
});

const Login = () => {
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
              {t('login.primary')}
            </Button>
            <Description>{t('login.notYetUser')}</Description>
          </Container>
        </Page>
      )}
    </Formik>
  );
};

export default Login;
