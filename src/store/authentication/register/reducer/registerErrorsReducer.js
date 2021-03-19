import { actionStatusError } from '../../../constants/ActionStatus';
import { POST_REGISTER } from '../actionCreator/postRegisterActionCreator';

const registerErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case actionStatusError(POST_REGISTER):
      if (action?.payload?.errors) {
        return action.payload.errors;
      }
      return state;
    default:
      return state;
  }
};

export default registerErrorsReducer;
