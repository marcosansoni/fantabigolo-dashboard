export const FRIENDS_LIST_REQUEST = 'FRIENDS_LIST_REQUEST';
export const FRIENDS_LIST = 'FRIENDS_LIST';

export const friendsListActionCreator = (username) => ({
  type: FRIENDS_LIST_REQUEST,
  payload: {
    username,
  },
});

export const friendsListSuccess = (payload) => ({
  type: FRIENDS_LIST,
  payload,
});
