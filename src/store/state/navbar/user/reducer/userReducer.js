import { LOGOUT } from '../../../authentication/logout/actionCreator/logoutActionCreator';
import { GET_USER } from '../actionCreator/getUserActionCreator';
import { actionStatusSuccess } from '../../../../constants/ActionStatus';
import User from '../../../../../entities/User';

const userReducer = (state = new User(), action) => {
  switch (action.type) {
    case actionStatusSuccess(GET_USER):
      if (action.payload.session) {
        return action.payload.user;
      }
      return state instanceof User ? state : new User(state);
    case LOGOUT:
      return new User();
    default:
      return state instanceof User ? state : new User(state);
  }
};

export default userReducer;
