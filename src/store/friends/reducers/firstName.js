import { LOGOUT, REGISTER } from '../../session/sessionActionCreator';
import { USER_INFO } from '../friendsActionCreator';

const firstName = (state = null, action) => {
  switch (action.type) {
    case REGISTER:
    case USER_INFO:
      if (action?.payload?.firstName) {
        return action.payload.firstName;
      }
      break;
    case LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default firstName;
