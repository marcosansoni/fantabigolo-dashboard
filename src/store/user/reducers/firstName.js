import SessionActionType from '../../session/SessionActionType';
import UserActionType from '../UserActionType';

const firstName = (state = null, action) => {
  switch (action.type) {
    case SessionActionType.POST_REGISTER:
    case UserActionType.GET_USER_INFO:
      if (action?.payload?.firstName) {
        return action.payload.firstName;
      }
      break;
    case SessionActionType.POST_LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default firstName;
