import SessionActionType from '../SessionActionType';

const session = (state = null, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN:
    case SessionActionType.POST_REGISTER:
      if (action?.payload?.session) {
        return action.payload.session;
      }
      break;
    case SessionActionType.POST_LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default session;
