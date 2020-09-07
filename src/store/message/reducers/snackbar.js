import { SNACKBAR } from '../messageActionCreator';

const snackbar = (state = {}, action) => {
  if(action.type === SNACKBAR){
    if(action?.payload){
      return action.payload;
    }
    return state;
  }
  return state;
};

export default snackbar;
