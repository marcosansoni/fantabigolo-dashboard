import React from 'react';
import BottomBar from './BottomBar';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'components/display/bottomBar',
  component: BottomBar,
  args: {
    children: <StoryArea height="48px">Content</StoryArea>,
  },
};

const Template = (args) => <BottomBar {...args} />;

export const Default = Template.bind({});
Default.storyName = 'BottomBar';
