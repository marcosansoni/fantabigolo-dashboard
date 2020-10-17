import FriendActionType from '../FriendActionType';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FriendActionType.GET_FRIENDS_LIST_REQUEST:
      return true;
    case FriendActionType.GET_FRIENDS_LIST:
      return false;
    default:
      return state;
  }
};

export default isFetching;
