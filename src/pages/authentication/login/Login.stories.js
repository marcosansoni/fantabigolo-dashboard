import React from 'react';
import Login from './Login';

export default {
  title: 'pages/authentication/Login',
  component: Login,
  // argTypes: {
  //   children: 'string',
  // },
  // args: {
  //   children: <StoryArea height="300px">Story</StoryArea>,
  // },
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   children: 'Text',
// };

Default.storyName = 'Login';
