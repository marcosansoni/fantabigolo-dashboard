import React from 'react';
import { useDispatch } from 'react-redux';
import StoryArea from '../../../../../.storybook/common/StoryArea';
import ProfileDropdown from './ProfileDropdown';
import User from '../../../../entities/User';
import getUserSuccessActionCreator from '../../../../store/state/navbar/user/actionCreator/getUserSuccessActionCreator';

export default {
  title: 'components/display/navBar/fragments',
  component: ProfileDropdown,
  args: {
    children: <StoryArea height="100%" width="100%">Children</StoryArea>,
  },
};

const Template = (args) => {
  const dispatch = useDispatch();
  dispatch(getUserSuccessActionCreator(new User({
    firstName: 'Marco',
    lastName: 'Sansoni',
    email: 'fantabigolo@fantabigolo.com',
  })));
  return (
    <ProfileDropdown {...args} />
  );
};

export const Default = Template.bind({});
Default.storyName = 'ProfileDropdown';
