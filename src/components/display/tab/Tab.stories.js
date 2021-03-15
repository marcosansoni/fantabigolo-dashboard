import React from 'react';
import Tab from './Tab';

export default {
  title: 'components/display/tab',
  component: Tab,
  args: {
    label: 'label',
  },
};

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.storyName = 'Tab';
