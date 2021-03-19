import { actionStatusError } from '../../../../constants/ActionStatus';
import { POST_LOGIN } from '../actionCreator/postLoginActionCreator';

const loginErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case actionStatusError(POST_LOGIN):
      if (action?.payload?.errors) {
        return action.payload.errors;
      }
      return state;
    default:
      return state;
  }
};

export default loginErrorsReducer;
