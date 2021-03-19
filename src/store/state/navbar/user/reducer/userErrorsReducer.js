import { actionStatusError } from '../../../../constants/ActionStatus';
import { GET_USER } from '../actionCreator/getUserActionCreator';

const userErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case actionStatusError(GET_USER):
      if (action?.payload?.errors) {
        return action.payload.errors;
      }
      return state;
    default:
      return state;
  }
};

export default userErrorsReducer;
