import React from 'react';
import FantaleagueListEmpty from './FantaleagueListEmpty';

export default {
  title: 'pages/fantaleague/fantaleagueList/fragments/fantaleagueListEmpty',
  component: FantaleagueListEmpty,
  // args: {
  //   title: 'Fantaschifo',
  //   chipsLabel: ['Sei un admin', 'Giornata: 8', 'Posizione: 4'],
  // },
};

const Template = (args) => <FantaleagueListEmpty {...args} />;

export const Default = Template.bind({});

Default.storyName = 'FantaleagueListEmpty';
