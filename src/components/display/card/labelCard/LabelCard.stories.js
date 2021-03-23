import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import LabelCard from './LabelCard';

export default {
  title: 'components/display/card/LabelCard',
  component: LabelCard,
  argTypes: {
    children: 'string',
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    children: 'Children',
  },
};

const Template = (args) => <LabelCard {...args}>{args.children}</LabelCard>;

export const Default = Template.bind({});
Default.storyName = 'LabelCard';

export const Icon = Template.bind({});
Icon.args = {
  icon: <AccountCircle />,
};
