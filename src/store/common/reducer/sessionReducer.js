import { actionStatusSuccess } from '../../constants/ActionStatus';
import Session from '../../../entities/Session';
import { POST_LOGIN } from '../../authentication/login/actionCreator/postLoginActionCreator';

const sessionReducer = (state = new Session(), action) => {
  switch (action.type) {
    case actionStatusSuccess(POST_LOGIN):
      if (action.payload.session) {
        return action.payload.session;
      }
      return state instanceof Session ? state : new Session(state);
    default:
      return state instanceof Session ? state : new Session(state);
  }
};

export default sessionReducer;
