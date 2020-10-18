import React from 'react';
import Section from './Section';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'Display/Section',
  component: Section,
  argTypes: {
    title: 'label',
    children: 'string',
  },
  args: {
    title: 'DefaultTitle',
    children: <StoryArea height="300px">Story</StoryArea>,
  },
};

const Template = (args) => <Section {...args} />;

export const Default = Template.bind({});
Section.args = {
  title: 'title',
  label: 'Button',
};
