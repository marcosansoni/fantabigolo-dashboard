import React from 'react';
import CardUser from './CardUser';

export default {
  title: 'Display/CardUser',
  component: CardUser,
  argTypes: {
    children: 'string',
  },
  args: {
    title: 'Title',
    subtitle: 'Subtitle',
    renderAction: () => <><div>Action</div><div>Action 2</div></>,
  },
};

const Template = (args) => <CardUser {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
