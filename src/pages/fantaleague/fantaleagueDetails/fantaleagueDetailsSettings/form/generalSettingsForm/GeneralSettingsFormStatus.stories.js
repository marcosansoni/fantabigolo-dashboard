import React from 'react';
import GeneralSettingsFormStatus from './GeneralSettingsFormStatus';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings/form/generalSettingsForm',
  component: GeneralSettingsFormStatus,
  argTypes: {
    status: {
      label: 'status',
      control: 'text',
      defaultValue: 'Asta',
    },
  },
};

const Template = (args) => <GeneralSettingsFormStatus {...args} />;

export const Default = Template.bind({});

Default.storyName = 'GeneralSettingsFormStatus';
