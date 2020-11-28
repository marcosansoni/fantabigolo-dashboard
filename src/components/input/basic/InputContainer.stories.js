import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import InputContainer from './InputContainer';

export default {
  title: 'Input/Basic',
  component: InputContainer,
  argTypes: {
    children: 'string',
  },
  args: {
    children: <StoryArea height="48px">Content</StoryArea>,
    title: 'Title',
    description: 'Description',
  },
};

const Template = (args) => <InputContainer {...args}>{args.children}</InputContainer>;

export const Default = Template.bind({});
Default.args = {
  // children: 'Text',
};
