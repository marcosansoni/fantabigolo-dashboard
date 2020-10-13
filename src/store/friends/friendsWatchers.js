import { takeLatest } from 'redux-saga/effects';
import { FRIENDS_LIST_REQUEST } from './friendsActionCreator';
import friendsListWorker from './worker/friendsListWorker';

const friendsWatchers = [
  takeLatest(FRIENDS_LIST_REQUEST, friendsListWorker),
];

export default friendsWatchers;
