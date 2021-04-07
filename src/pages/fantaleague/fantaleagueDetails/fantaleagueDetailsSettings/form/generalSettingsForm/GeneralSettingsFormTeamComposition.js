import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import Color from '../../../../../../assets/Color';

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 2px;
`;

const Container = styled.div`
  margin-top: 24px;
  width: 100%;
`;

const Description = styled.span`
  font-size: 14px;
  color: ${(p) => p.theme[Color.TEXT_LIGHT]};
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const ContainerInput = styled.div`
  height: 92px;
  margin: 8px;
`;

const GeneralSettingsFormTeamComposition = () => {
  const formik = useFormikContext();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('fantaleague.details.settings.tab.general.teamComposition.title')}</Title>
      <Description>{t('fantaleague.details.settings.tab.general.teamComposition.subtitle')}</Description>
      <Wrap>
        <ContainerInput>
          <TextField
            type="number"
            style={{ width: 320 }}
            label={t('fantaleague.details.settings.tab.general.placeholder.goalkeeper')}
            name="goalkeeper"
            variant="outlined"
            value={formik.values.goalkeeper}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('goalkeeper')}
            error={formik.touched.goalkeeper && Boolean(formik.errors.goalkeeper)}
            helperText={(formik.touched.goalkeeper && Boolean(formik.errors.goalkeeper))
              ? formik.errors.goalkeeper
              : t('fantaleague.details.settings.tab.general.helperText.goalkeeper')}
          />
        </ContainerInput>
        <ContainerInput>
          <TextField
            type="number"
            style={{ width: 320 }}
            label={t('fantaleague.details.settings.tab.general.placeholder.defender')}
            name="defender"
            variant="outlined"
            value={formik.values.defender}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('defender')}
            error={formik.touched.defender && Boolean(formik.errors.defender)}
            helperText={(formik.touched.defender && Boolean(formik.errors.defender))
              ? formik.errors.defender
              : t('fantaleague.details.settings.tab.general.helperText.defender')}
          />
        </ContainerInput>
        <ContainerInput>
          <TextField
            type="number"
            style={{ width: 320 }}
            label={t('fantaleague.details.settings.tab.general.placeholder.midfielder')}
            name="midfielder"
            variant="outlined"
            value={formik.values.midfielder}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('midfielder')}
            error={formik.touched.midfielder && Boolean(formik.errors.midfielder)}
            helperText={(formik.touched.midfielder && Boolean(formik.errors.midfielder))
              ? formik.errors.midfielder
              : t('fantaleague.details.settings.tab.general.helperText.midfielder')}
          />
        </ContainerInput>
        <ContainerInput>
          <TextField
            type="number"
            style={{ width: 320 }}
            label={t('fantaleague.details.settings.tab.general.placeholder.attackingMidfielder')}
            name="attackingMidfielder"
            disabled={!formik.values.allowsAttackingMidfielder}
            variant="outlined"
            value={formik.values.attackingMidfielder}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('attackingMidfielder')}
            error={formik.touched.attackingMidfielder && Boolean(formik.errors.attackingMidfielder)}
            helperText={(formik.touched.attackingMidfielder && Boolean(formik.errors.attackingMidfielder))
              ? formik.errors.attackingMidfielder
              : t('fantaleague.details.settings.tab.general.helperText.attackingMidfielder')}
          />
        </ContainerInput>
        <ContainerInput>
          <TextField
            type="number"
            style={{ width: 320 }}
            label={t('fantaleague.details.settings.tab.general.placeholder.striker')}
            name="striker"
            variant="outlined"
            value={formik.values.striker}
            onChange={formik.handleChange}
            onBlur={() => formik.setFieldTouched('striker')}
            error={formik.touched.striker && Boolean(formik.errors.striker)}
            helperText={(formik.touched.striker && Boolean(formik.errors.striker))
              ? formik.errors.striker
              : t('fantaleague.details.settings.tab.general.helperText.striker')}
          />
        </ContainerInput>

      </Wrap>
    </Container>
  );
};

export default GeneralSettingsFormTeamComposition;
