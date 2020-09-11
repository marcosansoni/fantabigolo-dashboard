import { LOGIN, LOGOUT, REGISTER } from '../sessionActionCreator';

const username = (state = null, action) => {
  switch(action.type){
    case LOGIN:
    case REGISTER:
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
