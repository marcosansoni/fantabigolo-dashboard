import React from 'react';
import Register from './Register';

export default {
  title: 'pages/authentication/Register',
  component: Register,
  // argTypes: {
  //   children: 'string',
  // },
  // args: {
  //   children: <StoryArea height="300px">Story</StoryArea>,
  // },
};

const Template = (args) => <Register {...args} />;

export const Default = Template.bind({});
// Default.args = {
//   children: 'Text',
// };

Default.storyName = 'Register';
