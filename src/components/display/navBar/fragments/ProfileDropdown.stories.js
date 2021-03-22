import React from 'react';
import { useDispatch } from 'react-redux';
import ProfileDropdown from './ProfileDropdown';
import User from '../../../../entities/User';
import getUserSuccessActionCreator from '../../../../store/state/navbar/user/actionCreator/getUserSuccessActionCreator';
import getUserActionCreator from '../../../../store/state/navbar/user/actionCreator/getUserActionCreator';

export default {
  title: 'components/display/navBar/fragments',
  component: ProfileDropdown,
  argTypes: {
    fetching: {
      label: 'fetching',
      control: 'boolean',
      defaultValue: false,
    },
  },
};

const Template = (args) => {
  const dispatch = useDispatch();
  if (args.fetching) {
    dispatch(getUserActionCreator());
  } else {
    dispatch(getUserSuccessActionCreator(new User({
      firstName: 'Marco',
      lastName: 'Sansoni',
      email: 'fantabigolo@fantabigolo.com',
    })));
  }
  return (
    <ProfileDropdown {...args} />
  );
};

export const Default = Template.bind({});
Default.storyName = 'ProfileDropdown';
