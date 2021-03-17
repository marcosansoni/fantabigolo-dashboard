import { actionStatusSuccess } from '../../constants/ActionStatus';
import Session from '../../../entities/Session';
import { POST_LOGIN } from '../../authentication/login/actionCreator/postLoginActionCreator';

const sessionReducer = (state = new Session(), action) => {
  switch (action.type) {
    case actionStatusSuccess(POST_LOGIN):
      if (action.payload.session instanceof Session) {
        return action.payload.session;
      }
      return state;
    default:
      return state;
  }
};

export default sessionReducer;
