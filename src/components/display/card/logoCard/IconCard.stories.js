import React from 'react';
import { AccountCircle } from '@material-ui/icons';
import IconCard from './IconCard';

export default {
  title: 'components/display/card/IconCard',
  component: IconCard,
  args: {
    children: <AccountCircle />,
  },
};

const Template = (args) => <IconCard {...args}>{args.children}</IconCard>;

export const Default = Template.bind({});
Default.storyName = 'IconCard';
