import React from 'react';
import Card from './Card';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'components/display/Card',
  component: Card,
  args: {
    children: <StoryArea height="300px">Story</StoryArea>,
  },
};

const Template = (args) => <Card {...args}>{args.children}</Card>;

export const Default = Template.bind({});
Default.storyName = 'Card';
