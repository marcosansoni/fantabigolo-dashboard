import React from 'react';
import GeneralSettingsForm from './GeneralSettingsForm';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings/form',
  component: GeneralSettingsForm,
  // args: {
  //   fantateam: 'Fantateam',
  //   fantaleague: 'Fantalega',
  //   labels: ['Sei un admin', '8 Partecipanti', 'Giornata 22'],
  // },
};

const Template = (args) => <GeneralSettingsForm {...args} />;

export const Default = Template.bind({});

Default.storyName = 'GeneralSettingsForm';
