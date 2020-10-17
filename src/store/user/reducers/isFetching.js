import UserActionType from '../UserActionType';

const session = (state = false, action) => {
  switch (action.type) {
    case UserActionType.GET_USER_INFO_REQUEST:
      return true;
    case UserActionType.GET_USER_INFO:
      return false;
    default:
      return state;
  }
};

export default session;
