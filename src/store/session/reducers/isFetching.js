import {
  LOGIN, LOGIN_REQUEST, REGISTER, REGISTER_REQUEST,
} from '../sessionActionCreator';

const session = (state = false, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return true;
    case LOGIN:
    case REGISTER:
      return false;
    default:
      return state;
  }
};

export default session;
