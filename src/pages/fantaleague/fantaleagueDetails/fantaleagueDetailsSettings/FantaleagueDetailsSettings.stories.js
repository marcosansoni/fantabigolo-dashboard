import React from 'react';
import FantaleagueDetailsSettings from './FantaleagueDetailsSettings';

export default {
  title: 'pages/fantaleague/fantaleagueDetails/fantaleagueDetailsSettings',
  component: FantaleagueDetailsSettings,
  args: {
    fantateam: 'Fantateam',
    fantaleague: 'Fantalega',
    labels: ['Sei un admin', '8 Partecipanti', 'Giornata 22'],
  },
};

const Template = (args) => <FantaleagueDetailsSettings {...args} />;

export const Default = Template.bind({});

Default.storyName = 'FantaleagueDetailsSettings';
