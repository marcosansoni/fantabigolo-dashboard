import { USER_INFO, USER_INFO_REQUEST } from '../userActionCreator';

const session = (state = false, action) => {
  switch (action.type) {
    case USER_INFO_REQUEST:
      return true;
    case USER_INFO:
      return false;
    default:
      return state;
  }
};

export default session;
