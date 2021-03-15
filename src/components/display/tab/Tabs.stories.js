import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import Tabs from './Tabs';

export default {
  title: 'components/display/tab',
  component: Tabs,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Tabs';
