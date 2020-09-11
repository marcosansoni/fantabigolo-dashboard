import { LOGOUT, REGISTER } from '../sessionActionCreator';

const email = (state = null, action) => {
  switch(action.type){
    case REGISTER:
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
