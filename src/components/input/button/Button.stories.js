import React from 'react';
import Button, { ButtonSize, ButtonType } from './Button';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'Input/Button',
  component: Button,
  argTypes: {
    children: 'string',
  },
  args: {
    children: <StoryArea height="300px">Story</StoryArea>,
  },
};

const Template = (args) => <Button {...args}>{args.children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  type: ButtonType.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text',
  type: ButtonType.SECONDARY,
};

export const Small = Template.bind({});
Small.args = {
  ...Primary.args,
  size: ButtonSize.SMALL,
};

export const Medium = Template.bind({});
Medium.args = {
  ...Primary.args,
  size: ButtonSize.MEDIUM,
};

export const Large = Template.bind({});
Large.args = {
  ...Primary.args,
  size: ButtonSize.LARGE,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

export const Fetching = Template.bind({});
Fetching.args = {
  ...Primary.args,
  fetching: true,
};
