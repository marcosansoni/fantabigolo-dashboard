import { LOGIN, LOGIN_REQUEST } from '../sessionActionCreator';

const session = (state = false, action) => {
  if (action.type === LOGIN_REQUEST) {
    return true;
  }
  if (action.type === LOGIN) {
    return false;
  }
  return state;
};

export default session;
