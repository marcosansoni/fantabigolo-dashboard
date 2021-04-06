import React from 'react';
import GeneralSettingsFormAdmin from './GeneralSettingsFormAdmin';
import User from '../../../../../../../entities/User';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings/form/generalSettingsForm/GeneralSettingsFormAdmin',
  component: GeneralSettingsFormAdmin,
  args: {
    admins: [
      new User({ username: 'Sanso', firstName: 'Marco', lastName: 'Sansoni' }),
      new User({ username: 'Pado', firstName: 'Alberto', lastName: 'Padoan' }),
    ],
  },
};

const Template = (args) => <GeneralSettingsFormAdmin {...args} />;

export const Default = Template.bind({});

Default.storyName = 'GeneralSettingsFormAdmin';
