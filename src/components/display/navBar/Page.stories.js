import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import Page from './Page';
import NavBar from './NavBar';

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
Default.storyName = 'Page';

export const ScrollablePage = Template.bind({});
ScrollablePage.args = {
  children: <StoryArea height="4000px" width="100%">Children</StoryArea>,
};
