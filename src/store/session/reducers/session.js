import { LOGIN, LOGOUT, REGISTER } from '../sessionActionCreator';

const session = (state = null, action) => {
  switch(action.type){
    case LOGIN:
    case REGISTER:
      if(action?.payload?.session){
        return action.payload.session;
      }
      break;
    case LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default session;
