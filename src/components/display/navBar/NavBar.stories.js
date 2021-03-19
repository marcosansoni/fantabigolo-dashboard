import React from 'react';
import NavBar from './NavBar';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'components/display/navBar/NavBar',
  component: NavBar,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.storyName = 'NavBar';
