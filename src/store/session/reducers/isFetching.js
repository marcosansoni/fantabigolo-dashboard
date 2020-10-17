import SessionActionType from '../SessionActionType';

const session = (state = false, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN_REQUEST:
    case SessionActionType.POST_REGISTER_REQUEST:
      return true;
    case SessionActionType.POST_LOGIN:
    case SessionActionType.POST_REGISTER:
      return false;
    default:
      return state;
  }
};

export default session;
