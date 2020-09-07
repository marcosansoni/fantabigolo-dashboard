import { LOGIN } from '../sessionActionCreator';

const session = (state = null, action) => {
  if(action.type === LOGIN){
    if(action?.payload?.session){
      return action.payload.session;
    }
    return state;
  }
  return state;
};

export default session;
