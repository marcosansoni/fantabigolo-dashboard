import React from 'react';
import Button from './Button';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    children: 'string',
  },
  args: {
    children: <StoryArea height="300px">Story</StoryArea>,
  },
};

const Template = (args) => <Button {...args}>CC</Button>;

export const Default = Template.bind({});
Button.args = {
  children: 'ciao',
};
