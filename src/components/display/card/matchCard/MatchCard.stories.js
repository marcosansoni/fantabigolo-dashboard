import React from 'react';
import MatchCard from './MatchCard';

export default {
  title: 'components/display/card/MatchCard',
  component: MatchCard,
  argTypes: {
    children: 'string',
  },
  args: {
    league: 'Fantaschifo',
    home: {
      team: 'Il trono di Spolli',
      trainer: 'Sanso',
      points: 73,
      goal: 2,
    },
    away: {
      team: 'Atletico Luganega',
      trainer: 'Pado',
      points: 65.5,
      goal: 0,
    },
  },
};

const Template = (args) => <MatchCard {...args}>{args.children}</MatchCard>;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
Default.storyName = 'MatchCard';
