export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO = 'USER_INFO';

export const userInfoActionCreator = (username) => ({
  type: USER_INFO_REQUEST,
  payload: {
    username,
  },
});

export const userInfoSuccess = (firstName, lastName, email) => ({
  type: USER_INFO,
  payload: {
    firstName,
    lastName,
    email,
  },
});
