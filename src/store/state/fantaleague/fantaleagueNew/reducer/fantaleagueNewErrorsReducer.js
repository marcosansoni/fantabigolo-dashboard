import { actionStatusError } from '../../../../constants/ActionStatus';
import { POST_FANTALEAGUE_NEW } from '../actionCreator/postFantaleagueNewActionCreator';

const fantaleagueNewErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case actionStatusError(POST_FANTALEAGUE_NEW):
      if (action?.payload?.errors) {
        return action.payload.errors;
      }
      return state;
    default:
      return state;
  }
};

export default fantaleagueNewErrorsReducer;
