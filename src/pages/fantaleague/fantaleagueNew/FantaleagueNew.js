import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useHistory } from 'react-router-dom';
import PageHeaderTitle from '../../../components/display/pageHeader/PageHeaderTitle';
import BottomBar from '../../../components/display/bottomBar/BottomBar';
import NavBar from '../../../components/display/navBar/NavBar';
import Page from '../../../components/display/navBar/Page';
import Routes from '../../../route/Routes';

const Description = styled.div`
  font-size: 16px;
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  height: 100%;
`;

const ContainerInput = styled.div`
  height: 92px;
  margin: 8px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const initialValues = {
  fantateam: '',
  fantaleague: '',
  visibility: 0,
  competition: 0,
  participants: 10,
};

const validationSchema = (t) => Yup.object({
  fantateam: Yup.string(t('fantaleague.new.errors.fantateam.default')).required(t('fantaleague.new.errors.fantateam.required')).min(4, t('fantaleague.new.errors.fantateam.minimum')),
  fantaleague: Yup.string(t('fantaleague.new.errors.fantaleague.default')).required(t('fantaleague.new.errors.fantaleague.required')).min(4, t('fantaleague.new.errors.fantaleague.minimum')),
  participants: Yup.number(t('fantaleague.new.errors.participants.default')).required(t('fantaleague.new.errors.participants.required')).min(1, t('fantaleague.new.errors.participants.minimum')),
});

const FantaleagueNew = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const handleSubmit = (formik) => {
    console.log(formik);
  };

  // Back to the list of all the fantaleague
  const handleCancel = () => {
    history.push(Routes.FANTALEAGUE.LIST);
  };

  const validationSchemaFormik = useMemo(() => validationSchema(t), []);

  return (
    <>
      <NavBar />
      <Page>
        <Container>
          <PageHeaderTitle
            title={t('fantaleague.new.title')}
            style={{ paddingBottom: 36 }}
          />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaFormik}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <>
                <Form>
                  <PerfectScrollbar style={{ padding: '8px 28px 28px 28px' }}>
                    <Description>{t('fantaleague.new.description')}</Description>
                    <Wrap>
                      <ContainerInput>
                        <TextField
                          style={{ width: 320 }}
                          label={t('fantaleague.new.placeholder.fantateam')}
                          name="fantateam"
                          variant="outlined"
                          value={formik.values.fantateam}
                          onChange={formik.handleChange}
                          onBlur={() => formik.setFieldTouched('fantateam')}
                          error={formik.touched.fantateam && Boolean(formik.errors.fantateam)}
                          helperText={(formik.touched.fantateam && Boolean(formik.errors.fantateam))
                            ? formik.errors.fantateam
                            : t('fantaleague.new.helperText.fantateam')}
                        />
                      </ContainerInput>
                      <ContainerInput>
                        <TextField
                          style={{ width: 320 }}
                          label={t('fantaleague.new.placeholder.fantaleague')}
                          name="fantaleague"
                          variant="outlined"
                          value={formik.values.fantaleague}
                          onChange={formik.handleChange}
                          onBlur={() => formik.setFieldTouched('fantaleague')}
                          error={formik.touched.fantaleague && Boolean(formik.errors.fantaleague)}
                          helperText={(formik.touched.fantaleague && Boolean(formik.errors.fantaleague))
                            ? formik.errors.fantaleague
                            : t('fantaleague.new.helperText.fantaleague')}
                        />
                      </ContainerInput>
                      <ContainerInput>
                        <TextField
                          select
                          style={{ width: 320 }}
                          label={t('fantaleague.new.placeholder.visibility')}
                          name="visibility"
                          variant="outlined"
                          value={formik.values.visibility}
                          onChange={formik.handleChange}
                          helperText={t('fantaleague.new.helperText.visibility')}
                        >
                          <MenuItem value={0}>{t('fantaleague.new.options.visibility.close')}</MenuItem>
                          <MenuItem value={1}>{t('fantaleague.new.options.visibility.options1')}</MenuItem>
                          <MenuItem value={2}>{t('fantaleague.new.options.visibility.options2')}</MenuItem>
                        </TextField>
                      </ContainerInput>
                      <ContainerInput>
                        <TextField
                          select
                          style={{ width: 320 }}
                          label={t('fantaleague.new.placeholder.competition')}
                          name="competition"
                          variant="outlined"
                          value={formik.values.competition}
                          onChange={formik.handleChange}
                          helperText={t('fantaleague.new.helperText.competition')}
                        >
                          <MenuItem value={0}>{t('fantaleague.new.options.competition.classic')}</MenuItem>
                          <MenuItem value={1}>{t('fantaleague.new.options.competition.simplified')}</MenuItem>
                          <MenuItem value={2}>{t('fantaleague.new.options.competition.f1')}</MenuItem>
                          <MenuItem value={2}>{t('fantaleague.new.options.competition.knockout')}</MenuItem>
                          <MenuItem value={2}>{t('fantaleague.new.options.competition.champions')}</MenuItem>
                        </TextField>
                      </ContainerInput>
                      <ContainerInput>
                        <TextField
                          type="number"
                          style={{ width: 320 }}
                          label={t('fantaleague.new.placeholder.participants')}
                          name="participants"
                          variant="outlined"
                          value={formik.values.participants}
                          onChange={formik.handleChange}
                          onBlur={() => formik.setFieldTouched('participants')}
                          error={formik.touched.participants && Boolean(formik.errors.participants)}
                          helperText={(formik.touched.participants && Boolean(formik.errors.participants))
                            ? formik.errors.participants
                            : t('fantaleague.new.helperText.participants')}
                        />
                      </ContainerInput>
                    </Wrap>
                  </PerfectScrollbar>
                </Form>
                <BottomBar style={{ justifyContent: 'flex-end' }}>
                  <Button
                    style={{ marginRight: 16 }}
                    variant="contained"
                    onClick={handleCancel}
                  >{t('fantaleague.new.cancel')}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={formik.handleSubmit}
                  >{t('fantaleague.new.primary')}
                  </Button>
                </BottomBar>
              </>
            )}
          </Formik>
        </Container>
      </Page>
    </>
  );
};

export default FantaleagueNew;
