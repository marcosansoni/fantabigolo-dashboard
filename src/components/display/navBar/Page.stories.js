import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import NavBar from './NavBar';
import Page from './Page';

export default {
  title: 'components/display/navBar/Page',
  component: Page,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => (
  <>
    <NavBar />
    <Page {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: <StoryArea height="4000px" width="100%">Children</StoryArea>,
};
Default.storyName = 'Page';
