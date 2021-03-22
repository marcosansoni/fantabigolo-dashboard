import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import ScrollablePage from './ScrollablePage';
import NavBar from './NavBar';

export default {
  title: 'components/display/navBar/ScrollablePage',
  component: ScrollablePage,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => (
  <>
    <NavBar />
    <ScrollablePage {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: <StoryArea height="4000px" width="100%">Children</StoryArea>,
};
Default.storyName = 'ScrollablePage';
