import { actionStatusSuccess } from '../../../constants/ActionStatus';
import Session from '../../../../entities/Session';
import { POST_LOGIN } from '../../authentication/login/actionCreator/postLoginActionCreator';
import { LOGOUT } from '../../authentication/logout/actionCreator/logoutActionCreator';

const sessionReducer = (state = new Session(), action) => {
  switch (action.type) {
    case actionStatusSuccess(POST_LOGIN):
      if (action.payload.session) {
        return action.payload.session;
      }
      return state instanceof Session ? state : new Session(state);
    case LOGOUT:
      return new Session();
    default:
      return state instanceof Session ? state : new Session(state);
  }
};

export default sessionReducer;
