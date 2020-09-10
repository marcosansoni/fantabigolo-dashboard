export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN = 'LOGIN';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT = 'LOGOUT';

export const loginActionCreator = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    username,
    password,
  },
});

export const loginSuccess = (username, session) => ({
  type: LOGIN,
  payload: {
    username,
    session,
  },
});

export const logoutActionCreator = () => ({
  type: LOGOUT_REQUEST,
});
