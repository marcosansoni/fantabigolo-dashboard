import isFetching from './reducers/isFetching';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN = 'LOGIN';

export const loginActionCreator = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
    isFetching,
  },
});

