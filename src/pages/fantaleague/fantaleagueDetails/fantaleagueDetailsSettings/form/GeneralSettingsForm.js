import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import styled from 'styled-components';
import GeneralSettingsFormFantaleague from './generalSettingsForm/GeneralSettingsFormFantaleague';
import GeneralSettingsFormTeamComposition from './generalSettingsForm/GeneralSettingsFormTeamComposition';
import GeneralSettingsFormAdmin from './generalSettingsForm/generalSettingsFormAdmin/GeneralSettingsFormAdmin';
import GeneralSettingsFormStatus from './generalSettingsForm/GeneralSettingsFormStatus';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  width: 100%;
`;

const SectionSeparator = styled.div`
  width: 100%;
  height: 24px;
`;

const initialValues = {
  visibility: 0,
  participants: 10,
  initialBudget: 500,
  repeatedPlayer: false,
  auction: 0,
  allowsAttackingMidfielder: false,
  playersComposition: {
    goalkeeper: 3,
    defender: 8,
    midfielder: 8,
    attackingMidfielder: 0,
    striker: 6,
  },
};

const validationSchema = (t) => Yup.object({
  participants: Yup.number(t('fantaleague.details.settings.tab.general.errors.participants.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.participants.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.participants.minimum')),
  initialBudget: Yup.number(t('fantaleague.details.settings.tab.general.errors.initialBudget.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.initialBudget.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.initialBudget.minimum')),
  allowsAttackingMidfielder: Yup.boolean(),
  repeatedPlayer: Yup.boolean(),
  goalkeeper: Yup.number(t('fantaleague.details.settings.tab.general.errors.goalkeeper.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.goalkeeper.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.goalkeeper.minimum')),
  defender: Yup.number(t('fantaleague.details.settings.tab.general.errors.defender.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.defender.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.defender.minimum')),
  midfielder: Yup.number(t('fantaleague.details.settings.tab.general.errors.midfielder.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.midfielder.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.midfielder.minimum')),
  attackingMidfielder: Yup.number()
    .when('allowsAttackingMidfielder', {
      is: true,
      then: Yup.number(t('fantaleague.details.settings.tab.general.errors.attackingMidfielder.default'))
        .required(t('fantaleague.details.settings.tab.general.errors.attackingMidfielder.required'))
        .min(1, t('fantaleague.details.settings.tab.general.errors.attackingMidfielder.minimum')),
      otherwise: Yup.number(),
    }),
  striker: Yup.number(t('fantaleague.details.settings.tab.general.errors.striker.default'))
    .required(t('fantaleague.details.settings.tab.general.errors.striker.required'))
    .min(1, t('fantaleague.details.settings.tab.general.errors.striker.minimum')),
});

const GeneralSettingsForm = () => {
  const { t } = useTranslation();

  const validationSchemaFormik = useMemo(() => validationSchema(t), []);

  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaFormik}
      onSubmit={handleSubmit}
    >
      {() => (
        <Container>
          <GeneralSettingsFormStatus />
          <SectionSeparator />
          <GeneralSettingsFormAdmin />
          <SectionSeparator />
          <GeneralSettingsFormFantaleague />
          <SectionSeparator />
          <GeneralSettingsFormTeamComposition />
        </Container>
      )}
    </Formik>
  );
};

export default GeneralSettingsForm;
