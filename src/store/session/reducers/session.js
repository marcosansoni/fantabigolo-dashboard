import { LOGIN, LOGOUT } from '../sessionActionCreator';

const session = (state = null, action) => {
  switch(action.type){
    case LOGIN:
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
