import React from 'react';
import Tag from './Tag';
import Color from '../../../assets/Color';

export default {
  title: 'Display/Tag',
  component: Tag,
  argTypes: {
    children: 'string',
  },
  args: {
    borderColor: Color.PRIMARY_DARK,
    // title: 'Title',
    // subtitle: 'Subtitle',
  },
};

const Template = (args) => <Tag {...args}>{args.children}</Tag>;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
