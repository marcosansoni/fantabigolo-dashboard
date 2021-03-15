import React from 'react';
import Register from './Register';

export default {
  title: 'pages/authentication/Register',
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const Default = Template.bind({});

Default.storyName = 'Register';
