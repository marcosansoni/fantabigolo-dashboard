import React from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

export default {
  title: 'components/display/tab',
  component: Tabs,
};

const Template = (args) => <Tabs {...args}><Tab label="Label 1" /><Tab label="Label 2" /><Tab label="Label 3" /></Tabs>;

export const Default = Template.bind({});
Default.storyName = 'Tabs';
