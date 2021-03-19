import React from 'react';
import FantaleagueListCard from './FantaleagueListCard';

export default {
  title: 'pages/fantaleague/fantaleagueList/fragments/fantaleagueListCard',
  component: FantaleagueListCard,
  args: {
    title: 'Fantaschifo',
    chipsLabel: ['Sei un admin', 'Giornata: 8', 'Posizione: 4'],
  },
};

const Template = (args) => <FantaleagueListCard {...args} />;

export const Default = Template.bind({});

Default.storyName = 'FantaleagueListCard';
