import { LOGIN, LOGOUT } from '../sessionActionCreator';

const username = (state = null, action) => {
  switch(action.type){
    case LOGIN:
      if(action?.payload?.username){
        return action.payload.username;
      }
      break;
    case LOGOUT:
      return null;
    default:
      return state;
  }
  return state;
};

export default username;
