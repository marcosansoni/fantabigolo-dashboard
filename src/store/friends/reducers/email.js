import { LOGOUT, REGISTER } from '../../session/sessionActionCreator';
import { USER_INFO } from '../friendsActionCreator';

const email = (state = null, action) => {
  switch(action.type){
    case REGISTER:
    case USER_INFO:
      if(action?.payload?.email){
        return action.payload.email;
      }
      break;
    case LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default email;
