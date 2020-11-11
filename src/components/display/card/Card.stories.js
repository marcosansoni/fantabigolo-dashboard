import React from 'react';
import Card from './Card';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'Display/Card',
  component: Card,
  argTypes: {
    children: 'string',
  },
  args: {
    children: <StoryArea height="300px">Story</StoryArea>,
  },
};

const Template = (args) => <Card {...args}>{args.children}</Card>;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
