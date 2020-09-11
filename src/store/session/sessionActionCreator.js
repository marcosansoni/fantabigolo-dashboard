export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN = 'LOGIN';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT = 'LOGOUT';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER = 'REGISTER';

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

export const registerActionCreator = (username, password, email, firstName, lastName, photo) => ({
  type: REGISTER_REQUEST,
  payload: {
    username,
    password,
    email,
    firstName,
    lastName,
    photo,
  },
});

export const registerSuccess = ({
  username, email, firstName, lastName, photo, session,
}) => ({
  type: REGISTER,
  payload: {
    username,
    session,
    firstName,
    lastName,
    photo,
    email,
  },
});

export const logoutActionCreator = () => ({
  type: LOGOUT_REQUEST,
});
