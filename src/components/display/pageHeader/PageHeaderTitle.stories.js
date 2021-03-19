import React from 'react';
import PageHeaderTitle from './PageHeaderTitle';
import StoryArea from '../../../../.storybook/common/StoryArea';

export default {
  title: 'components/display/pageHeader/pageHeaderTitle',
  component: PageHeaderTitle,
  args: {
    children: <StoryArea height="48px">Children</StoryArea>,
    rightContent: <StoryArea height="100%" width="128px">rightContent</StoryArea>,
    title: 'title',
    upperTitle: 'upperTitle',
  },
};

const Template = (args) => <PageHeaderTitle {...args} />;

export const Default = Template.bind({});

Default.storyName = 'PageHeaderTitle';
