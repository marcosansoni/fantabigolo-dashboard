import React from 'react';
import UserCard from './userCard';

export default {
  title: 'components/display/card/UserCard',
  component: UserCard,
  argTypes: {
    children: 'string',
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    renderAction: () => <><div>Action</div><div>Action 2</div></>,
  },
};

const Template = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.storyName = 'UserCard';
