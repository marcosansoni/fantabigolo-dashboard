import React from 'react';
import StoryArea from '../../../../.storybook/common/StoryArea';
import PageHeader from './PageHeader';

export default {
  title: 'components/display/pageHeader/pageHeader',
  component: PageHeader,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.storyName = 'PageHeader';
