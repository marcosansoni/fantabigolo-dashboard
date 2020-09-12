import { LOGOUT, REGISTER } from '../../session/sessionActionCreator';
import { USER_INFO } from '../userActionCreator';

const lastName = (state = null, action) => {
  switch (action.type) {
    case REGISTER:
    case USER_INFO:
      if (action?.payload?.lastName) {
        return action.payload.lastName;
      }
      break;
    case LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default lastName;
