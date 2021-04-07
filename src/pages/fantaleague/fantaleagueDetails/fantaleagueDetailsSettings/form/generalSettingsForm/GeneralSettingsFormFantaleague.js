import { useFormikContext } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { MenuItem, Switch, TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ContainerInput = styled.div`
  height: 92px;
  margin: 8px;
`;

const ContainerSwitch = styled.div`
  height: 92px;
  width: 320px;
  margin: 8px;
  display: flex;
  flex-direction: column;
`;

const HelperSwitch = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,0.6);
`;

const GeneralSettingsFormFantaleague = () => {
  const formik = useFormikContext();
  const { t } = useTranslation();

  const handleChangeAttackingMidfielder = () => {
    if (formik.values.allowsAttackingMidfielder) {
      formik.setFieldValue('attackingMidfielder', 0);
    }
    formik.setFieldValue('allowsAttackingMidfielder', !formik.values.allowsAttackingMidfielder);
  };

  return (
    <Wrap>
      <ContainerInput>
        <TextField
          select
          style={{ width: 320 }}
          label={t('fantaleague.details.settings.tab.general.placeholder.visibility')}
          name="visibility"
          variant="outlined"
          value={formik.values.visibility}
          onChange={formik.handleChange}
          helperText={t('fantaleague.details.settings.tab.general.helperText.visibility')}
        >
          <MenuItem value={0}>{t('fantaleague.new.options.visibility.close')}</MenuItem>
          <MenuItem value={1}>{t('fantaleague.new.options.visibility.friend')}</MenuItem>
          <MenuItem value={2}>{t('fantaleague.new.options.visibility.open')}</MenuItem>
        </TextField>
      </ContainerInput>
      <ContainerInput>
        <TextField
          type="number"
          style={{ width: 320 }}
          label={t('fantaleague.details.settings.tab.general.placeholder.participants')}
          name="participants"
          variant="outlined"
          value={formik.values.participants}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched('participants')}
          error={formik.touched.participants && Boolean(formik.errors.participants)}
          helperText={(formik.touched.participants && Boolean(formik.errors.participants))
            ? formik.errors.participants
            : t('fantaleague.details.settings.tab.general.helperText.participants')}
        />
      </ContainerInput>
      <ContainerInput>
        <TextField
          type="number"
          style={{ width: 320 }}
          label={t('fantaleague.details.settings.tab.general.placeholder.initialBudget')}
          name="participants"
          variant="outlined"
          value={formik.values.initialBudget}
          onChange={formik.handleChange}
          onBlur={() => formik.setFieldTouched('initialBudget')}
          error={formik.touched.initialBudget && Boolean(formik.errors.initialBudget)}
          helperText={(formik.touched.initialBudget && Boolean(formik.errors.initialBudget))
            ? formik.errors.initialBudget
            : t('fantaleague.details.settings.tab.general.helperText.initialBudget')}
        />
      </ContainerInput>
      <ContainerInput>
        <TextField
          select
          style={{ width: 320 }}
          label={t('fantaleague.details.settings.tab.general.placeholder.auction')}
          name="visibility"
          variant="outlined"
          value={formik.values.visibility}
          onChange={formik.handleChange}
          helperText={t('fantaleague.details.settings.tab.general.helperText.auction')}
        >
          <MenuItem value={0}>{t('fantaleague.details.settings.tab.general.options.auction.bid')}</MenuItem>
        </TextField>
      </ContainerInput>
      <ContainerSwitch>
        {t('fantaleague.details.settings.tab.general.placeholder.allowsAttackingMidfielder')}
        <Switch
          color="primary"
          value={formik.values.allowsAttackingMidfielder}
          onClick={handleChangeAttackingMidfielder}
        />
        <HelperSwitch>{t('fantaleague.details.settings.tab.general.helperText.allowsAttackingMidfielder')}</HelperSwitch>
      </ContainerSwitch>
      <ContainerSwitch>
        {t('fantaleague.details.settings.tab.general.placeholder.repeatedPlayer')}
        <Switch
          color="primary"
          value={formik.values.allowsAttackingMidfielder}
          onClick={() => formik.setFieldValue('repeatedPlayer', !formik.values.repeatedPlayer)}
        />
        <HelperSwitch>{t('fantaleague.details.settings.tab.general.helperText.repeatedPlayer')}</HelperSwitch>
      </ContainerSwitch>
    </Wrap>
  );
};

export default GeneralSettingsFormFantaleague;
