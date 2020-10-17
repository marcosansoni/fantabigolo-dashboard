import { takeLatest } from 'redux-saga/effects';
import getFriendsListWorker from './worker/getFriendsListWorker';
import FriendActionType from './FriendActionType';

const FriendWatcher = [
  takeLatest(FriendActionType.GET_FRIENDS_LIST_REQUEST, getFriendsListWorker),
];

export default FriendWatcher;
