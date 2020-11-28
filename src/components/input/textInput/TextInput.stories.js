import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Input/Basic',
  component: TextInput,
  argTypes: {
    children: 'string',
  },
  args: {
    // children: <StoryArea height="48px">Content</StoryArea>,
    // title: 'Title',
    // description: 'Description',
    defaultValue: 'Value',
  },
};

const Template = (args) => <TextInput {...args}>{args.children}</TextInput>;

export const Default = Template.bind({});
Default.args = {
  // children: 'Text',
};
