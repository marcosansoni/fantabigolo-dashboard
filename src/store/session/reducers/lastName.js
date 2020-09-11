import { LOGOUT, REGISTER } from '../sessionActionCreator';

const lastName = (state = null, action) => {
  switch(action.type){
    case REGISTER:
      if(action?.payload?.lastName){
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
