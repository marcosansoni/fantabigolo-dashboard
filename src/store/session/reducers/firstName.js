import { LOGOUT, REGISTER } from '../sessionActionCreator';

const firstName = (state = null, action) => {
  switch(action.type){
    case REGISTER:
      if(action?.payload?.firstName){
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
