import MessageActionType from '../MessageActionType';

const snackbar = (state = {}, action) => {
  if (action.type === MessageActionType.SNACKBAR) {
    if (action?.payload) {
      return action.payload;
    }
    return state;
  }
  return state;
};

export default snackbar;
