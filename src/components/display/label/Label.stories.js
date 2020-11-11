import React from 'react';
import Label from './Label';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'Display/Label',
  component: Label,
  argTypes: {
    children: 'string',
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
  },
};

const Template = (args) => <Label {...args}>{args.children}</Label>;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
