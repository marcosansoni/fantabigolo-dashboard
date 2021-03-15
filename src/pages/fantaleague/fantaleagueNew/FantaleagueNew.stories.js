import React from 'react';
import FantaleagueNew from './FantaleagueNew';

export default {
  title: 'pages/fantaleague/fantaleagueList/fantaleagueList',
  component: FantaleagueNew,
};

const Template = (args) => <FantaleagueNew {...args} />;

export const Default = Template.bind({});

Default.storyName = 'FantaleagueList';
