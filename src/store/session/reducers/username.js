import { LOGIN } from '../sessionActionCreator';

const username = (state = null, action) => {
  if(action.type === LOGIN){
    if(action?.payload?.username){
      return action.payload.username;
    }
    return state;
  }
  return state;
};

export default username;
