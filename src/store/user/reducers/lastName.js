import SessionActionType from '../../session/SessionActionType';
import UserActionType from '../UserActionType';

const lastName = (state = null, action) => {
  switch (action.type) {
    case SessionActionType.POST_REGISTER:
    case UserActionType.GET_USER_INFO:
      if (action?.payload?.lastName) {
        return action.payload.lastName;
      }
      break;
    case SessionActionType.POST_LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default lastName;
