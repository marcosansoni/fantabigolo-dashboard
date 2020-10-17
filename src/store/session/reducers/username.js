import SessionActionType from '../SessionActionType';

const username = (state = null, action) => {
  switch (action.type) {
    case SessionActionType.POST_LOGIN:
    case SessionActionType.POST_REGISTER:
      if (action?.payload?.username) {
        return action.payload.username;
      }
      break;
    case SessionActionType.POST_LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default username;
