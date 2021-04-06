import React from 'react';
import GeneralSettingsFormAdminDialog from './GeneralSettingsFormAdminDialog';
import User from '../../../../../../../entities/User';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings/form/generalSettingsForm/GeneralSettingsFormAdminDialog',
  component: GeneralSettingsFormAdminDialog,
  args: {
    participants: [
      new User({ username: 'Sanso', firstName: 'Marco', lastName: 'Sansoni' }),
      new User({ username: 'Pado', firstName: 'Alberto', lastName: 'Padoan' }),
    ],
  },
};

const Template = (args) => <GeneralSettingsFormAdminDialog {...args} />;

export const Default = Template.bind({});

Default.storyName = 'GeneralSettingsFormAdminDialog';
