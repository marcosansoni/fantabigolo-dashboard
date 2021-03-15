import React from 'react';
import FantaleagueList from './FantaleagueList';

export default {
  title: 'pages/fantaleague/fantaleagueList',
  component: FantaleagueList,
};

const Template = (args) => <FantaleagueList {...args} />;

export const Default = Template.bind({});

Default.storyName = 'FantaleagueList';
